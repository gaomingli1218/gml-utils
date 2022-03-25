'use strict'

var setupDefaults = require('./setupDefaults')

var arrayEach = require('./arrayEach')
var each = require('./each')
var isFunction = require('./isFunction')

var assign = require('./assign')

var GMLUtils = function () {}

function mixin () {
  arrayEach(arguments, function (methods) {
    each(methods, function (fn, name) {
      GMLUtils[name] = isFunction(fn) ? function () {
        var result = fn.apply(GMLUtils.$context, arguments)
        GMLUtils.$context = null
        return result
      } : fn
    })
  })
}

function setup (options) {
  return assign(setupDefaults, options)
}

GMLUtils.VERSION = '@VERSION'
GMLUtils.mixin = mixin
GMLUtils.setup = setup

module.exports = GMLUtils
