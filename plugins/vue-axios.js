
(function() {

  function VueAxios(Vue, axios) {
    if (!axios) {
      console.error('You must install axios!')
      return
    }
    if (VueAxios.installed) {
      return
    }
    VueAxios.installed = true

    Object.defineProperties(Vue.prototype, {
      '$axios': {
        get() {
          return axios
        }
      }
    })
  }


  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = VueAxios
  } else if(typeof define === 'function' && define.amd) {
    define(function () { return VueAxios })
  } else if (typeof window !== 'undefined') {
    window.VueAxios = VueAxios
  }
})()
