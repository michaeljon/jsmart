define(['jSmart', 'text!./templates/functions.tpl', 'text!./output/functions.tpl'], function (jSmart, smartyTpl, outputTpl) {
  describe('Test Functions', function () {
    jSmart.prototype.registerPlugin(
      'function',
      'isEmptyStr',
      function (params, data) {
        return (params.s.length === 0)
      }
    )

    jSmart.prototype.registerPlugin(
      'function',
      'sayHello',
      function (params, data) {
        var s = 'Hello '
        s += params.to
        return s
      }
    )

    function strayFunc (v1, v2) { // eslint-disable-line no-unused-vars
      return v1 + ',' + v2
    }
    window.strayFunc = strayFunc

    function strayNoArgs () { // eslint-disable-line no-unused-vars
      return 'bar'
    }
    window.strayNoArgs = strayNoArgs

    it('test inline functions', function () {
      var tpl = "{function 'sayHello' to=''}Hello {$to}!{/function}"
      tpl += '\n'
      tpl += '{sayHello to="whole World"}'

      var t = new jSmart(tpl)
      expect(t.fetch()).toBe('Hello whole World!')
    })

    it('test js functions', function () {
      window.hello = function (to) {
        return 'Hello ' + to
      }

      var tpl = "{hello('World')}"
      tpl += ' and '
      tpl += "{helloAgain('world')}"

      var t = new jSmart(tpl)
      expect(t.fetch({
        helloAgain: function (name) {
          return window.hello(name) + ' again'
        }
      })).toBe('Hello World and Hello world again')
    })

    it('test complex template', function () {
      // Insert complex statements in the template and test them.
      var t = new jSmart(smartyTpl)
      expect(t.fetch(getData())).toBe(outputTpl)
    })
  })
})
