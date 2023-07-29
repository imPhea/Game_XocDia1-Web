window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3394P7sLxNV7AFcBR9W1SH", "Audio");
    "use strict";
    var AudioManager = cc.Class({
      extends: cc.Component,
      properties: {
        coinsWin: {
          default: null,
          type: cc.AudioClip
        },
        coinsInsert: {
          default: null,
          type: cc.AudioClip
        },
        DiceOpen: {
          default: null,
          type: cc.AudioClip
        },
        timerCountSound: {
          default: null,
          type: cc.AudioClip
        },
        gameLoading: {
          default: null,
          type: cc.AudioClip
        },
        MoveDia: {
          default: null,
          type: cc.AudioClip
        }
      },
      statics: {
        instance: null
      },
      playShakePlate: function playShakePlate() {
        cc.audioEngine.playMusic(this.MoveDia, false);
      },
      playCoinsWin: function playCoinsWin() {
        cc.audioEngine.playMusic(this.coinsWin, false);
      },
      playCoinsInsert: function playCoinsInsert() {
        cc.audioEngine.playEffect(this.coinsInsert, false);
      },
      playDiceSound: function playDiceSound() {
        cc.audioEngine.playEffect(this.DiceOpen, false);
      },
      playTimeSound: function playTimeSound() {
        cc.audioEngine.playEffect(this.timerCountSound, false);
      },
      playGameLoading: function playGameLoading() {
        cc.audioEngine.playEffect(this.gameLoading, false);
      },
      playGameLoadingOff: function playGameLoadingOff() {
        cc.audioEngine.playEffect(this.gameLoading, true);
      },
      playSound: function playSound(audioClip) {
        if (!audioClip) return;
        cc.audioEngine.playMusic(audioClip, false);
      },
      onLoad: function onLoad() {
        AudioManager.instance = this;
      }
    });
    cc._RF.pop();
  }, {} ],
  SoundMN: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c29b4rVGntFWZgcmaqtxbEN", "SoundMN");
    "use strict";
    var Sound = cc.Class({
      properties: {
        n: {
          default: "",
          type: cc.String
        },
        clip: {
          default: null,
          type: cc.AudioClip
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  btnBetEven: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb698Yu6sBMeYk4WKkJM878", "btnBetEven");
    "use strict";
    cc.Class({
      extends: cc.Component,
      coin1kFocus: function coin1kFocus(valuecoin1, coinNode1, coin1, defaultBetCoin1) {
        true == valuecoin1 && this.coinfun(coinNode1, coin1, defaultBetCoin1);
      },
      coin5kFocus: function coin5kFocus(valuecoin2, coinNode2, coin2, defaultBetCoin2) {
        true == valuecoin2 && this.coinfun(coinNode2, coin2, defaultBetCoin2);
      },
      coin10kFocus: function coin10kFocus(valuecoin3, coinNode3, coin3, defaultBetCoin3) {
        true == valuecoin3 && this.coinfun(coinNode3, coin3, defaultBetCoin3);
      },
      coin20kFocus: function coin20kFocus(valuecoin4, coinNode4, coin4, defaultBetCoin4) {
        true == valuecoin4 && this.coinfun(coinNode4, coin4, defaultBetCoin4);
      },
      coin5okFocus: function coin5okFocus(valuecoin5, coinNode5, coin5, defaultBetCoin5) {
        true == valuecoin5 && this.coinfun(coinNode5, coin5, defaultBetCoin5);
      },
      coin100kFocus: function coin100kFocus(valuecoin6, coinNode6, coin6, defaultBetCoin6) {
        true == valuecoin6 && this.coinfun(coinNode6, coin6, defaultBetCoin6);
      },
      coinfun: function coinfun(coinNode1, coin1, defaultBetCoin1) {
        coinNode1.opacity = 0;
        var bet = cc.instantiate(coin1[0]);
        bet.setPosition(coinNode1.position);
        this.node.addChild(bet);
        coinNode1 = bet;
        coinNode1.setPosition(defaultBetCoin1);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  games: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "38860kDsJtNI5yB7bmEJuUp", "games");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it;
      if ("undefined" === typeof Symbol || null == o[Symbol.iterator]) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
          it && (o = it);
          var i = 0;
          return function() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      it = o[Symbol.iterator]();
      return it.next.bind(it);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var Sound = require("SoundMN");
    cc.Class({
      extends: cc.Component,
      properties: {
        musicSound: [ Sound ],
        sfxSound: [ Sound ],
        musicSource: {
          default: null,
          type: cc.AudioSource
        },
        sfxSource: {
          default: null,
          type: cc.AudioSource
        },
        musicSlider: {
          default: null,
          type: cc.Slider
        },
        sfxSlider: {
          default: null,
          type: cc.Slider
        },
        setting: {
          default: null,
          type: cc.Node
        },
        coin1: {
          default: [],
          type: [ cc.Prefab ]
        },
        coin2: {
          default: [],
          type: [ cc.Prefab ]
        },
        coin3: {
          default: [],
          type: [ cc.Prefab ]
        },
        coin4: {
          default: [],
          type: [ cc.Prefab ]
        },
        coin5: {
          default: [],
          type: [ cc.Prefab ]
        },
        coin6: {
          default: [],
          type: [ cc.Prefab ]
        },
        coinNode1: {
          default: null,
          type: cc.Node
        },
        coinNode2: {
          default: null,
          type: cc.Node
        },
        coinNode3: {
          default: null,
          type: cc.Node
        },
        coinNode4: {
          default: null,
          type: cc.Node
        },
        coinNode5: {
          default: null,
          type: cc.Node
        },
        coinNode6: {
          default: null,
          type: cc.Node
        },
        coinBet1: {
          default: null,
          type: cc.Node
        },
        coinBet2: {
          default: null,
          type: cc.Node
        },
        coinBet3: {
          default: null,
          type: cc.Node
        },
        coinBet4: {
          default: null,
          type: cc.Node
        },
        coinBet5: {
          default: null,
          type: cc.Node
        },
        coinBet6: {
          default: null,
          type: cc.Node
        },
        valuecoin1: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        valuecoin2: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        valuecoin3: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        valuecoin4: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        valuecoin5: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        valuecoin6: {
          default: true,
          visible: false,
          type: cc.Boolean
        },
        evenNode: {
          default: null,
          type: cc.Node
        },
        white4Node: {
          default: null,
          type: cc.Node
        },
        white3Node: {
          default: null,
          type: cc.Node
        },
        white1Node: {
          default: null,
          type: cc.Node
        },
        red4Node: {
          default: null,
          type: cc.Node
        },
        oddNode: {
          default: null,
          type: cc.Node
        },
        evenNode1: {
          default: null,
          type: cc.Node
        },
        white4Node2: {
          default: null,
          type: cc.Node
        },
        white3Node3: {
          default: null,
          type: cc.Node
        },
        white1Node4: {
          default: null,
          type: cc.Node
        },
        red5Node5: {
          default: null,
          type: cc.Node
        },
        oddNode6: {
          default: null,
          type: cc.Node
        },
        timeLabel: {
          default: null,
          type: cc.Label
        },
        count: {
          default: 15,
          visible: false,
          type: cc.Integer
        },
        plateup: {
          default: null,
          type: cc.Node
        },
        platedown: {
          default: null,
          type: cc.Node
        },
        dis1: {
          default: null,
          type: cc.Node
        },
        dis2: {
          default: null,
          type: cc.Node
        },
        dis3: {
          default: null,
          type: cc.Node
        },
        dis4: {
          default: null,
          type: cc.Node
        },
        disprefab: {
          default: [],
          type: [ cc.Prefab ]
        },
        evenvalue1: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        white4value2: {
          default: null,
          visible: false,
          type: cc.Integer
        },
        white3value3: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        white1value4: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        red4value5: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        oddvalue6: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        arrayevenNode: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        arraywhite4Node: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        arraywhite3Node: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        arraywhite1Node: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        arrayred4Node: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        arrayoddNode: {
          default: [],
          visible: false,
          type: [ cc.Node ]
        },
        betValueWin: {
          default: 0,
          visible: false,
          type: cc.Integer
        },
        betValueCretedit: {
          default: 2e3,
          visible: false,
          type: cc.Integer
        },
        credite: {
          default: null,
          type: cc.Node
        },
        creditLabel: {
          default: null,
          type: cc.Label
        },
        winlabel: {
          default: null,
          type: cc.Label
        },
        winNode: {
          default: null,
          type: cc.Node
        },
        evenLabe: {
          default: null,
          type: cc.Label
        },
        white4Labe: {
          default: null,
          type: cc.Label
        },
        white3Labe: {
          default: null,
          type: cc.Label
        },
        white1Labe: {
          default: null,
          type: cc.Label
        },
        redLabe: {
          default: null,
          type: cc.Label
        },
        oddLabe: {
          default: null,
          type: cc.Label
        },
        ChanWin: {
          default: null,
          type: cc.Node
        },
        LeWin: {
          default: null,
          type: cc.Node
        }
      },
      statics: {
        defaultBetCoin1: null,
        defaultBetCoin2: null,
        defaultBetCoin3: null,
        defaultBetCoin4: null,
        defaultBetCoin5: null,
        defaultBetCoin6: null,
        btnfocus: null
      },
      onLoad: function onLoad() {
        this.ChanWin.opacity = 0;
        this.LeWin.opacity = 0;
        this.PlayMusic("Music");
        this.buttonAction(this.evenNode1);
        this.buttonAction(this.white4Node2);
        this.buttonAction(this.white3Node3);
        this.buttonAction(this.white1Node4);
        this.buttonAction(this.red5Node5);
        this.buttonAction(this.oddNode6);
        this.defaultBetCoin1 = this.coinNode1.position;
        this.defaultBetCoin2 = this.coinNode2.position;
        this.defaultBetCoin3 = this.coinNode3.position;
        this.defaultBetCoin4 = this.coinNode4.position;
        this.defaultBetCoin5 = this.coinNode5.position;
        this.defaultBetCoin6 = this.coinNode6.position;
        this.coinNode1.on(cc.Node.EventType.TOUCH_START, this.coin1KBet, this);
        this.coinNode2.on(cc.Node.EventType.TOUCH_START, this.coin5kBet, this);
        this.coinNode3.on(cc.Node.EventType.TOUCH_START, this.coin10kBet, this);
        this.coinNode4.on(cc.Node.EventType.TOUCH_START, this.coin20kBet, this);
        this.coinNode5.on(cc.Node.EventType.TOUCH_START, this.coin50kBet, this);
        this.coinNode6.on(cc.Node.EventType.TOUCH_START, this.coin100kBet, this);
        this.evenNode1.on(cc.Node.EventType.TOUCH_START, this.btnEven, this);
        this.white4Node2.on(cc.Node.EventType.TOUCH_START, this.btnWhite4All, this);
        this.white3Node3.on(cc.Node.EventType.TOUCH_START, this.btnWhite3All, this);
        this.white1Node4.on(cc.Node.EventType.TOUCH_START, this.btnRed4All, this);
        this.red5Node5.on(cc.Node.EventType.TOUCH_START, this.btnRed3All, this);
        this.oddNode6.on(cc.Node.EventType.TOUCH_START, this.btnOdd, this);
        this.btnfocus = this.node.getComponent("btnBetEven");
        this.getGenerateResult();
      },
      clearReslt: function clearReslt() {
        this.evenvalue1 = 0;
        this.white1value4 = 0;
        this.white3value3 = 0;
        this.white4value2 = 0;
        this.red4value5 = 0;
        this.oddvalue6 = 0;
        this.betValueWin = 0;
        this.evenLabe.string = this.evenvalue1;
        this.white4Labe.string = this.white4value2;
        this.white3Labe.string = this.white3value3;
        this.white1Labe.string = this.white1value4;
        this.redLabe.string = this.red4value5;
        this.oddLabe.string = this.oddvalue6;
        this.winlabel.string = this.betValueWin;
        this.ChanWin.opacity = 0;
        this.LeWin.opacity = 0;
      },
      clearCoin: function clearCoin() {
        for (var _iterator = _createForOfIteratorHelperLoose(this.arrayevenNode), _step; !(_step = _iterator()).done; ) {
          var coin = _step.value;
          coin.destroy();
        }
        for (var _iterator2 = _createForOfIteratorHelperLoose(this.arrayoddNode), _step2; !(_step2 = _iterator2()).done; ) {
          var _coin = _step2.value;
          _coin.destroy();
        }
        for (var _iterator3 = _createForOfIteratorHelperLoose(this.arraywhite1Node), _step3; !(_step3 = _iterator3()).done; ) {
          var _coin2 = _step3.value;
          _coin2.destroy();
        }
        for (var _iterator4 = _createForOfIteratorHelperLoose(this.arraywhite3Node), _step4; !(_step4 = _iterator4()).done; ) {
          var _coin3 = _step4.value;
          _coin3.destroy();
        }
        for (var _iterator5 = _createForOfIteratorHelperLoose(this.arraywhite4Node), _step5; !(_step5 = _iterator5()).done; ) {
          var _coin4 = _step5.value;
          _coin4.destroy();
        }
        for (var _iterator6 = _createForOfIteratorHelperLoose(this.arrayred4Node), _step6; !(_step6 = _iterator6()).done; ) {
          var _coin5 = _step6.value;
          _coin5.destroy();
        }
      },
      coinWinMove: function coinWinMove(array) {
        for (var _iterator7 = _createForOfIteratorHelperLoose(array), _step7; !(_step7 = _iterator7()).done; ) {
          var coin = _step7.value;
          cc.tween(coin).repeat(3, cc.tween().to(2, {
            position: cc.v2(0, -2500)
          })).start();
        }
      },
      coinDecrease: function coinDecrease(array) {
        for (var _iterator8 = _createForOfIteratorHelperLoose(array), _step8; !(_step8 = _iterator8()).done; ) {
          var coin = _step8.value;
          cc.tween(coin).repeat(3, cc.tween().to(2, {
            position: cc.v2(-500, 1e3)
          })).start();
        }
      },
      plateOpen: function plateOpen() {
        this.plateup.setPosition(this.plateup.x + 300, this.plateup.y + 5);
      },
      moveclose: function moveclose() {
        this.plateup.setPosition(this.plateup.x - 300, this.plateup.y - 5);
      },
      generateValues: function generateValues(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      shakeDice: function shakeDice(coin) {
        cc.tween(coin).repeat(4, cc.tween().to(.2, {
          position: cc.v2(coin.x + 35, coin.y),
          angle: 360
        }, {
          easing: "easeBounceIn"
        }).call(function() {}).to(.1, {
          position: cc.v2(coin.x, coin.y),
          angle: 360
        }, {
          easing: "easeBounceIn"
        }).call(function() {}).to(.1, {
          position: cc.v2(coin.x - 35, coin.y),
          angle: 360
        }, {
          easing: "easeBounceIn"
        }).call(function() {}).to(.1, {
          position: cc.v2(coin.x, coin.y),
          angle: 0
        }, {
          easing: "easeBounceIn"
        })).start();
      },
      getResult: function getResult() {
        var resultGen1 = this.generateValues(0, 1);
        var resultGen2 = this.generateValues(0, 1);
        var resultGen3 = this.generateValues(0, 1);
        var resultGen4 = this.generateValues(0, 1);
        var prefabDice = cc.instantiate(this.disprefab[resultGen1]);
        this.node.addChild(prefabDice);
        prefabDice.setPosition(cc.v2(this.dis1.position));
        this.dis1 = prefabDice;
        var prefabDice2 = cc.instantiate(this.disprefab[resultGen2]);
        this.node.addChild(prefabDice2);
        prefabDice2.setPosition(cc.v2(this.dis2.position));
        this.dis2 = prefabDice2;
        var prefabDice3 = cc.instantiate(this.disprefab[resultGen3]);
        this.node.addChild(prefabDice3);
        prefabDice3.setPosition(cc.v2(this.dis3.position));
        this.dis3 = prefabDice3;
        var prefabDice4 = cc.instantiate(this.disprefab[resultGen4]);
        this.node.addChild(prefabDice4);
        prefabDice4.setPosition(cc.v2(this.dis4.position));
        this.dis4 = prefabDice4;
        if (0 == resultGen1 && 0 == resultGen2 && 0 == resultGen3 && 0 == resultGen4) {
          this.LeWin.opacity = 255;
          this.coinWinMove(this.arrayred4Node);
          this.coinDecrease(this.arraywhite1Node);
          this.coinDecrease(this.arraywhite4Node);
          this.coinDecrease(this.arrayevenNode);
          this.coinDecrease(this.arraywhite3Node);
          this.coinDecrease(this.arrayoddNode);
          this.betValueWin += 15 * this.red4value5;
          this.betValueWin += 2 * this.evenvalue1;
          this.winlabel.string = this.betValueWin + "K";
          this.betValueCretedit += this.betValueWin;
          this.creditLabel.string = this.betValueCretedit + "K";
          (this.red4value5 > 0 || this.evenvalue1 > 0) && this.PlaySFX("Win");
        } else if (1 == resultGen1 && 1 == resultGen2 && 1 == resultGen3 && 1 == resultGen4) {
          this.coinWinMove(this.arraywhite4Node);
          this.coinDecrease(this.arraywhite1Node);
          this.coinDecrease(this.arrayred4Node);
          this.coinDecrease(this.arrayevenNode);
          this.coinDecrease(this.arraywhite3Node);
          this.coinDecrease(this.arrayoddNode);
          this.betValueWin += 15 * this.white4value2;
          this.betValueWin += 2 * this.evenvalue1;
          this.winlabel.string = this.betValueWin + "K";
          this.betValueCretedit += this.betValueWin;
          this.creditLabel.string = this.betValueCretedit + "K";
          (this.white4value2 > 0 || this.evenvalue1 > 0) && this.PlaySFX("Win");
        } else {
          if (!(1 != resultGen1 && 1 != resultGen2 || 1 != resultGen3 && 1 != resultGen4 || 0 != resultGen1 && 0 != resultGen2 || 0 != resultGen3 && 0 != resultGen4) || !(1 != resultGen3 && 1 != resultGen2 || 1 != resultGen1 && 1 != resultGen4 || 0 != resultGen4 && 0 != resultGen2 || 0 != resultGen3 && 0 != resultGen1)) {
            if ((0 == resultGen1 || 0 == resultGen3) && (0 == resultGen2 || 0 == resultGen4) && (1 == resultGen4 || 1 == resultGen2) && (1 == resultGen1 || 1 == resultGen3)) {
              if ((0 == resultGen1 || 0 == resultGen4) && (0 == resultGen2 || 0 == resultGen3) && (1 == resultGen4 || 1 == resultGen1) && (2 == resultGen1 || 1 == resultGen3)) {
                this.betValueWin += 2 * this.evenvalue1;
                this.ChanWin.opacity = 255;
                this.winlabel.string = this.betValueWin + "K";
                this.betValueCretedit += this.betValueWin;
                this.creditLabel.string = this.betValueCretedit + "K";
                this.coinWinMove(this.arrayevenNode);
                this.coinDecrease(this.arraywhite4Node);
                this.coinDecrease(this.arrayred4Node);
                this.coinDecrease(this.arraywhite1Node);
                this.coinDecrease(this.arraywhite3Node);
                this.coinDecrease(this.arrayoddNode);
                this.evenvalue1 > 0 && this.PlaySFX("Win");
                return;
              }
              this.ChanWin.opacity = 255;
              this.betValueWin += 2 * this.evenvalue1;
              this.winlabel.string = this.betValueWin + "K";
              this.betValueCretedit += this.betValueWin;
              this.creditLabel.string = this.betValueCretedit + "K";
              this.coinWinMove(this.arrayevenNode);
              this.coinDecrease(this.arraywhite4Node);
              this.coinDecrease(this.arrayred4Node);
              this.coinDecrease(this.arraywhite1Node);
              this.coinDecrease(this.arraywhite3Node);
              this.coinDecrease(this.arrayoddNode);
              this.evenvalue1 > 0 && this.PlaySFX("Win");
              return;
            }
            this.ChanWin.opacity = 255;
            this.betValueWin += 2 * this.evenvalue1;
            this.winlabel.string = this.betValueWin + "K";
            this.betValueCretedit += this.betValueWin;
            this.creditLabel.string = this.betValueCretedit + "K";
            this.coinWinMove(this.arrayevenNode);
            this.coinDecrease(this.arraywhite4Node);
            this.coinDecrease(this.arrayred4Node);
            this.coinDecrease(this.arraywhite1Node);
            this.coinDecrease(this.arraywhite3Node);
            this.coinDecrease(this.arrayoddNode);
            this.evenvalue1 > 0 && this.PlaySFX("Win");
            return;
          }
          if (1 != resultGen1 && 1 != resultGen2 || 1 != resultGen3 && 1 != resultGen4 || 1 != resultGen4 && 1 != resultGen2 || 1 != resultGen3 && 1 != resultGen1) {
            this.LeWin.opacity = 255;
            this.betValueWin += 4 * this.white1value4;
            this.betValueWin += 2 * this.oddvalue6;
            this.winlabel.string = this.betValueWin + "K";
            this.betValueCretedit += this.betValueWin;
            this.creditLabel.string = this.betValueCretedit + "K";
            this.coinWinMove(this.arraywhite1Node);
            this.coinWinMove(this.arrayoddNode);
            this.coinDecrease(this.arraywhite4Node);
            this.coinDecrease(this.arrayevenNode);
            this.coinDecrease(this.arrayred4Node);
            this.coinDecrease(this.arraywhite3Node);
            (this.white1value4 > 0 || this.oddvalue6 > 0) && this.PlaySFX("Win");
          } else {
            this.LeWin.opacity = 255;
            this.betValueWin += 4 * this.white3value3;
            this.betValueWin += 2 * this.oddvalue6;
            this.winlabel.string = this.betValueWin + "K";
            this.betValueCretedit += this.betValueWin;
            this.creditLabel.string = this.betValueCretedit + "K";
            this.coinWinMove(this.arraywhite3Node);
            this.coinWinMove(this.arrayoddNode);
            this.coinDecrease(this.arraywhite4Node);
            this.coinDecrease(this.arrayred4Node);
            this.coinDecrease(this.arraywhite1Node);
            this.coinDecrease(this.arrayevenNode);
            (this.white3value3 > 0 || this.oddvalue6 > 0) && this.PlaySFX("Win");
          }
        }
      },
      coin1KBet: function coin1KBet() {
        if (true == this.valuecoin1) {
          this.PlaySFX("Tap");
          this.coinNode1.opacity = 0;
          var coinVal1 = cc.instantiate(this.coin1[1]);
          coinVal1.setPosition(this.coinNode1.x, this.coinNode1.y);
          this.node.addChild(coinVal1);
          this.coinNode1 = coinVal1;
          this.coinNode1.setPosition(this.defaultBetCoin1);
          this.valuecoin1 = false;
          this.valuecoin2 = true;
          this.valuecoin3 = true;
          this.valuecoin4 = true;
          this.valuecoin5 = true;
          this.valuecoin6 = true;
          this.btnfocus.coin5kFocus(this.valuecoin2, this.coinNode2, this.coin2, this.defaultBetCoin2);
          this.btnfocus.coin10kFocus(this.valuecoin3, this.coinNode3, this.coin3, this.defaultBetCoin3);
          this.btnfocus.coin20kFocus(this.valuecoin4, this.coinNode4, this.coin4, this.defaultBetCoin4);
          this.btnfocus.coin5okFocus(this.valuecoin5, this.coinNode5, this.coin5, this.defaultBetCoin5);
          this.btnfocus.coin100kFocus(this.valuecoin6, this.coinNode6, this.coin6, this.defaultBetCoin6);
        } else {
          this.coinNode1.opacity = 0;
          var coinVal2 = cc.instantiate(this.coin1[0]);
          coinVal2.setPosition(this.coinNode1.position);
          this.node.addChild(coinVal2);
          this.coinNode1 = coinVal2;
          this.coinNode1.setPosition(this.defaultBetCoin1);
          this.valuecoin1 = true;
        }
      },
      coin5kBet: function coin5kBet() {
        this.PlaySFX("Tap");
        if (true == this.valuecoin2) {
          this.coinNode2.opacity = 0;
          var coinBet5k = cc.instantiate(this.coin2[1]);
          coinBet5k.setPosition(this.coinNode2.position);
          this.node.addChild(coinBet5k);
          this.coinNode2 = coinBet5k;
          this.coinNode2.setPosition(this.defaultBetCoin2);
          this.valuecoin2 = false;
          this.valuecoin1 = true;
          this.valuecoin3 = true;
          this.valuecoin4 = true;
          this.valuecoin5 = true;
          this.valuecoin6 = true;
          this.btnfocus.coin1kFocus(this.valuecoin1, this.coinNode1, this.coin1, this.defaultBetCoin1);
          this.btnfocus.coin10kFocus(this.valuecoin3, this.coinNode3, this.coin3, this.defaultBetCoin3);
          this.btnfocus.coin20kFocus(this.valuecoin4, this.coinNode4, this.coin4, this.defaultBetCoin4);
          this.btnfocus.coin5okFocus(this.valuecoin5, this.coinNode5, this.coin5, this.defaultBetCoin5);
          this.btnfocus.coin100kFocus(this.valuecoin6, this.coinNode6, this.coin6, this.defaultBetCoin6);
        } else {
          this.valuecoin2 = true;
          this.coinNode2.opacity = 0;
          var coinBet5k1 = cc.instantiate(this.coin2[0]);
          coinBet5k1.setPosition(this.coinNode2.position);
          this.node.addChild(coinBet5k1);
          this.coinNode2 = coinBet5k1;
          this.coinNode2.setPosition(this.defaultBetCoin2);
        }
      },
      coin10kBet: function coin10kBet() {
        this.PlaySFX("Tap");
        if (true == this.valuecoin3) {
          this.coinNode3.opacity = 0;
          var coinBet10k = cc.instantiate(this.coin3[1]);
          coinBet10k.setPosition(this.coinNode3.position);
          this.node.addChild(coinBet10k);
          this.coinNode3 = coinBet10k;
          this.coinNode3.setPosition(this.defaultBetCoin3);
          this.valuecoin3 = false;
          this.valuecoin1 = true;
          this.valuecoin2 = true;
          this.valuecoin4 = true;
          this.valuecoin5 = true;
          this.valuecoin6 = true;
          this.btnfocus.coin1kFocus(this.valuecoin1, this.coinNode1, this.coin1, this.defaultBetCoin1);
          this.btnfocus.coin5kFocus(this.valuecoin2, this.coinNode2, this.coin2, this.defaultBetCoin2);
          this.btnfocus.coin20kFocus(this.valuecoin4, this.coinNode4, this.coin4, this.defaultBetCoin4);
          this.btnfocus.coin5okFocus(this.valuecoin5, this.coinNode5, this.coin5, this.defaultBetCoin5);
          this.btnfocus.coin100kFocus(this.valuecoin6, this.coinNode6, this.coin6, this.defaultBetCoin6);
        } else {
          this.coinNode3.opacity = 0;
          var coinBet10k1 = cc.instantiate(this.coin3[0]);
          coinBet10k1.setPosition(this.coinNode3.position);
          this.node.addChild(coinBet10k1);
          this.coinNode3 = coinBet10k1;
          this.coinNode3.setPosition(this.defaultBetCoin3);
          this.valuecoin3 = true;
        }
      },
      coin20kBet: function coin20kBet() {
        this.PlaySFX("Tap");
        if (true == this.valuecoin4) {
          this.coinNode4.opacity = 0;
          var coinBet20k = cc.instantiate(this.coin4[1]);
          coinBet20k.setPosition(this.coinNode4.position);
          this.node.addChild(coinBet20k);
          this.coinNode4 = coinBet20k;
          this.coinNode4.setPosition(this.defaultBetCoin4);
          this.valuecoin4 = false;
          this.valuecoin1 = true;
          this.valuecoin2 = true;
          this.valuecoin3 = true;
          this.valuecoin5 = true;
          this.valuecoin6 = true;
          this.btnfocus.coin1kFocus(this.valuecoin1, this.coinNode1, this.coin1, this.defaultBetCoin1);
          this.btnfocus.coin5kFocus(this.valuecoin2, this.coinNode2, this.coin2, this.defaultBetCoin2);
          this.btnfocus.coin10kFocus(this.valuecoin3, this.coinNode3, this.coin3, this.defaultBetCoin3);
          this.btnfocus.coin5okFocus(this.valuecoin5, this.coinNode5, this.coin5, this.defaultBetCoin5);
          this.btnfocus.coin100kFocus(this.valuecoin6, this.coinNode6, this.coin6, this.defaultBetCoin6);
        } else {
          this.coinNode4.opacity = 0;
          var coinBet20k1 = cc.instantiate(this.coin4[0]);
          coinBet20k1.setPosition(this.coinNode4.position);
          this.node.addChild(coinBet20k1);
          this.coinNode4 = coinBet20k1;
          this.coinNode4.setPosition(this.defaultBetCoin4);
          this.valuecoin4 = true;
        }
      },
      coin50kBet: function coin50kBet() {
        this.PlaySFX("Tap");
        if (true == this.valuecoin5) {
          this.coinNode5.opacity = 0;
          var coinBet50k = cc.instantiate(this.coin5[1]);
          coinBet50k.setPosition(this.coinNode5.position);
          this.node.addChild(coinBet50k);
          this.coinNode5 = coinBet50k;
          this.coinNode5.setPosition(this.defaultBetCoin5);
          this.valuecoin5 = false;
          this.valuecoin1 = true;
          this.valuecoin2 = true;
          this.valuecoin3 = true;
          this.valuecoin4 = true;
          this.valuecoin6 = true;
          this.btnfocus.coin1kFocus(this.valuecoin1, this.coinNode1, this.coin1, this.defaultBetCoin1);
          this.btnfocus.coin5kFocus(this.valuecoin2, this.coinNode2, this.coin2, this.defaultBetCoin2);
          this.btnfocus.coin10kFocus(this.valuecoin3, this.coinNode3, this.coin3, this.defaultBetCoin3);
          this.btnfocus.coin20kFocus(this.valuecoin4, this.coinNode4, this.coin4, this.defaultBetCoin4);
          this.btnfocus.coin100kFocus(this.valuecoin6, this.coinNode6, this.coin6, this.defaultBetCoin6);
        } else {
          this.coinNode5.opacity = 0;
          var coinBet50k1 = cc.instantiate(this.coin5[0]);
          coinBet50k1.setPosition(this.coinNode5.position);
          this.node.addChild(coinBet50k1);
          this.coinNode5 = coinBet50k1;
          this.coinNode5.setPosition(this.defaultBetCoin5);
          this.valuecoin5 = true;
        }
      },
      coin100kBet: function coin100kBet() {
        this.PlaySFX("Tap");
        if (true == this.valuecoin6) {
          this.coinNode6.opacity = 0;
          var coinBet100k = cc.instantiate(this.coin6[1]);
          coinBet100k.setPosition(this.coinNode6.position);
          this.node.addChild(coinBet100k);
          this.coinNode6 = coinBet100k;
          this.coinNode6.setPosition(this.defaultBetCoin6);
          this.valuecoin6 = false;
          this.valuecoin1 = true;
          this.valuecoin2 = true;
          this.valuecoin3 = true;
          this.valuecoin4 = true;
          this.valuecoin5 = true;
          this.btnfocus.coin1kFocus(this.valuecoin1, this.coinNode1, this.coin1, this.defaultBetCoin1);
          this.btnfocus.coin5kFocus(this.valuecoin2, this.coinNode2, this.coin2, this.defaultBetCoin2);
          this.btnfocus.coin10kFocus(this.valuecoin3, this.coinNode3, this.coin3, this.defaultBetCoin3);
          this.btnfocus.coin20kFocus(this.valuecoin4, this.coinNode4, this.coin4, this.defaultBetCoin4);
          this.btnfocus.coin5okFocus(this.valuecoin5, this.coinNode5, this.coin5, this.defaultBetCoin5);
        } else {
          this.coinNode6.opacity = 0;
          var coinBet100k1 = cc.instantiate(this.coin6[0]);
          coinBet100k1.setPosition(this.coinNode6.position);
          this.node.addChild(coinBet100k1);
          this.coinNode6 = coinBet100k1;
          this.coinNode6.setPosition(this.defaultBetCoin6);
          this.valuecoin6 = true;
        }
      },
      getGenerateResult: function getGenerateResult() {
        this.count = 20;
        this.schedule(function() {
          if (20 == this.count) {
            this.PlaySFX("Shake");
            this.shakeDice(this.plateup);
            this.shakeDice(this.platedown);
          }
          this.count > 0 && this.count < 20 && this.PlaySFX("Clock");
          if (this.count > 0) this.timeLabel.string = "" + this.count; else {
            this.timeLabel.string = "GO";
            if (0 == this.count) {
              this.dis1.opacity = 0;
              this.dis2.opacity = 0;
              this.dis3.opacity = 0;
              this.dis4.opacity = 0;
              this.PlaySFX("DiceOpen");
              this.plateOpen();
              this.getResult();
            }
            if (-5 == this.count) {
              this.dis1.opacity = 0;
              this.dis2.opacity = 0;
              this.dis3.opacity = 0;
              this.dis4.opacity = 0;
              this.clearReslt();
              this.clearCoin();
              this.moveclose();
              this.count = 21;
            }
          }
          this.count--;
        }, 1);
      },
      btnOdd: function btnOdd() {
        var _this = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-100, 100);
        if (false == this.valuecoin1) {
          this.PlaySFX("Insert");
          if (this.betValueCretedit >= 1) {
            this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
              var coin = cc.instantiate(_this.coinBet1);
              coin.setPosition(_this.coinBet1.position);
              _this.node.addChild(coin);
              _this.arrayoddNode.push(coin);
              _this.coinBet1.setPosition(_this.defaultBetCoin1);
            })));
            this.betValueCretedit -= 1;
            this.oddvalue6 += 1;
            this.oddLabe.string = this.oddvalue6 + "K";
            this.creditLabel.string = this.betValueCretedit + "K";
          }
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this.coinBet2);
            coin.setPosition(_this.coinBet2.position);
            _this.node.addChild(coin);
            _this.arrayoddNode.push(coin);
            _this.coinBet2.setPosition(_this.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.oddvalue6 += 5;
          this.oddLabe.string = this.oddvalue6 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this.coinBet3);
            coin.setPosition(_this.coinBet3.position);
            _this.node.addChild(coin);
            _this.arrayoddNode.push(coin);
            _this.coinBet3.setPosition(_this.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.oddvalue6 += 10;
          this.oddLabe.string = this.oddvalue6 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this.coinBet4);
            coin.setPosition(_this.coinBet4.position);
            _this.node.addChild(coin);
            _this.arrayoddNode.push(coin);
            _this.coinBet4.setPosition(_this.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.oddvalue6 += 20;
          this.oddLabe.string = this.oddvalue6 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this.coinBet5);
            coin.setPosition(_this.coinBet5.position);
            _this.node.addChild(coin);
            _this.arrayoddNode.push(coin);
            _this.coinBet5.setPosition(_this.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.oddvalue6 += 50;
          this.oddLabe.string = this.oddvalue6 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.oddNode.x + locx, this.oddNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this.coinBet6);
            coin.setPosition(_this.coinBet6.position);
            _this.node.addChild(coin);
            _this.arrayoddNode.push(coin);
            _this.coinBet6.setPosition(_this.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.oddvalue6 += 100;
          this.oddLabe.string = this.oddvalue6 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      btnRed3All: function btnRed3All() {
        var _this2 = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-100, 100);
        if (false == this.valuecoin1 && this.betValueCretedit >= 1) {
          this.PlaySFX("Insert");
          this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet1);
            coin.setPosition(_this2.coinBet1.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet1.setPosition(_this2.defaultBetCoin1);
          })));
          this.betValueCretedit -= 1;
          this.red4value5 += 1;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet2);
            coin.setPosition(_this2.coinBet2.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet2.setPosition(_this2.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.red4value5 += 5;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet3);
            coin.setPosition(_this2.coinBet3.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet3.setPosition(_this2.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.red4value5 += 10;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet4);
            coin.setPosition(_this2.coinBet4.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet4.setPosition(_this2.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.red4value5 += 20;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet5);
            coin.setPosition(_this2.coinBet5.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet5.setPosition(_this2.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.red4value5 += 50;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          var _locx = this.generateValues(-100, 100);
          var pos7 = this.generateValues(0, 70);
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.red4Node.x + _locx, this.red4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this2.coinBet6);
            coin.setPosition(_this2.coinBet6.position);
            _this2.node.addChild(coin);
            _this2.arrayred4Node.push(coin);
            _this2.coinBet6.setPosition(_this2.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.red4value5 += 100;
          this.redLabe.string = this.red4value5 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      btnRed4All: function btnRed4All() {
        var _this3 = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-150, 150);
        if (false == this.valuecoin1 && this.betValueCretedit >= 1) {
          this.PlaySFX("Insert");
          this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + locx, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet1);
            coin.setPosition(_this3.coinBet1.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet1.setPosition(_this3.defaultBetCoin1);
          })));
          this.betValueCretedit -= 1;
          this.white1value4 += 1;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + locx, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet2);
            coin.setPosition(_this3.coinBet2.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet2.setPosition(_this3.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.white1value4 += 5;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + locx, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet3);
            coin.setPosition(_this3.coinBet3.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet3.setPosition(_this3.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.white1value4 += 10;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + locx, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet4);
            coin.setPosition(_this3.coinBet4.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet4.setPosition(_this3.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.white1value4 += 20;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + locx, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet5);
            coin.setPosition(_this3.coinBet5.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet5.setPosition(_this3.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.white1value4 += 50;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          var _locx2 = this.generateValues(-150, 100);
          var pos7 = this.generateValues(0, 70);
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white1Node.x + _locx2, this.white1Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this3.coinBet6);
            coin.setPosition(_this3.coinBet6.position);
            _this3.node.addChild(coin);
            _this3.arraywhite1Node.push(coin);
            _this3.coinBet6.setPosition(_this3.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.white1value4 += 100;
          this.white1Labe.string = this.white1value4 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      btnWhite3All: function btnWhite3All() {
        var _this4 = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-100, 100);
        if (false == this.valuecoin1 && this.betValueCretedit >= 1) {
          this.PlaySFX("Insert");
          this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet1);
            coin.setPosition(_this4.coinBet1.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet1.setPosition(_this4.defaultBetCoin1);
          })));
          this.betValueCretedit -= 1;
          this.white3value3 += 1;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet2);
            coin.setPosition(_this4.coinBet2.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet2.setPosition(_this4.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.white3value3 += 5;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet3);
            coin.setPosition(_this4.coinBet3.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet3.setPosition(_this4.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.white3value3 += 10;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet4);
            coin.setPosition(_this4.coinBet4.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet4.setPosition(_this4.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.white3value3 += 20;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet5);
            coin.setPosition(_this4.coinBet5.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet5.setPosition(_this4.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.white3value3 += 50;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white3Node.x + locx, this.white3Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this4.coinBet6);
            coin.setPosition(_this4.coinBet6.position);
            _this4.node.addChild(coin);
            _this4.arraywhite3Node.push(coin);
            _this4.coinBet6.setPosition(_this4.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.white3value3 += 100;
          this.white3Labe.string = this.white3value3 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      btnWhite4All: function btnWhite4All() {
        var _this5 = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-100, 100);
        if (false == this.valuecoin1 && this.betValueCretedit >= 1) {
          this.PlaySFX("Insert");
          this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet1);
            coin.setPosition(_this5.coinBet1.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet1.setPosition(_this5.defaultBetCoin1);
          })));
          this.betValueCretedit -= 1;
          this.white4value2 += 1;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet2);
            coin.setPosition(_this5.coinBet2.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet2.setPosition(_this5.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.white4value2 += 5;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet3);
            coin.setPosition(_this5.coinBet3.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet3.setPosition(_this5.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.white4value2 += 10;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet4);
            coin.setPosition(_this5.coinBet4.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet4.setPosition(_this5.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.white4value2 += 20;
          this.white4Labe.string = this.white4value2;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet5);
            coin.setPosition(_this5.coinBet5.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet5.setPosition(_this5.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.white4value2 += 50;
          this.white4Labe.string = this.white4value2;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.white4Node.x + locx, this.white4Node.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this5.coinBet6);
            coin.setPosition(_this5.coinBet6.position);
            _this5.node.addChild(coin);
            _this5.arraywhite4Node.push(coin);
            _this5.coinBet6.setPosition(_this5.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.white4value2 += 100;
          this.white4Labe.string = this.white4value2 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      btnEven: function btnEven() {
        var _this6 = this;
        if (this.count <= 0) return;
        var locx = this.generateValues(-100, 100);
        var locy = this.generateValues(-100, 100);
        if (false == this.valuecoin1 && this.betValueCretedit >= 1) {
          this.PlaySFX("Insert");
          this.coinBet1.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet1);
            coin.setPosition(_this6.coinBet1.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet1.setPosition(_this6.defaultBetCoin1);
          })));
          this.betValueCretedit -= 1;
          this.evenvalue1 += 1;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin2 && this.betValueCretedit >= 5) {
          this.PlaySFX("Insert");
          this.coinBet2.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet2);
            coin.setPosition(_this6.coinBet2.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet2.setPosition(_this6.defaultBetCoin2);
          })));
          this.betValueCretedit -= 5;
          this.evenvalue1 += 5;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin3 && this.betValueCretedit >= 10) {
          this.PlaySFX("Insert");
          this.coinBet3.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet3);
            coin.setPosition(_this6.coinBet3.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet3.setPosition(_this6.defaultBetCoin3);
          })));
          this.betValueCretedit -= 10;
          this.evenvalue1 += 10;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin4 && this.betValueCretedit >= 20) {
          this.PlaySFX("Insert");
          this.coinBet4.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet4);
            coin.setPosition(_this6.coinBet4.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet4.setPosition(_this6.defaultBetCoin4);
          })));
          this.betValueCretedit -= 20;
          this.evenvalue1 += 20;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin5 && this.betValueCretedit >= 50) {
          this.PlaySFX("Insert");
          this.coinBet5.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet5);
            coin.setPosition(_this6.coinBet5.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet5.setPosition(_this6.defaultBetCoin5);
          })));
          this.betValueCretedit -= 50;
          this.evenvalue1 += 50;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
        if (false == this.valuecoin6 && this.betValueCretedit >= 100) {
          this.PlaySFX("Insert");
          this.coinBet6.runAction(cc.sequence(cc.moveTo(.1, cc.v2(this.evenNode.x + locx, this.evenNode.y - locy)), cc.callFunc(function() {
            var coin = cc.instantiate(_this6.coinBet6);
            coin.setPosition(_this6.coinBet6.position);
            _this6.node.addChild(coin);
            _this6.arrayevenNode.push(coin);
            _this6.coinBet6.setPosition(_this6.defaultBetCoin6);
          })));
          this.betValueCretedit -= 100;
          this.evenvalue1 += 100;
          this.evenLabe.string = this.evenvalue1 + "K";
          this.creditLabel.string = this.betValueCretedit + "K";
        }
      },
      buttonAction: function buttonAction(btn) {
        var button = btn.addComponent(cc.Button);
        button.transition = cc.Button.Transition.SCALE;
        button.duration = .1;
        button.zoomScale = 1.08;
      },
      start: function start() {},
      update: function update(dt) {},
      back: function back() {
        this.PlaySFX("Tap");
        cc.audioEngine.stopAll();
        cc.director.loadScene("load");
      },
      PlayMusic: function PlayMusic(name) {
        var s = this.musicSound.find(function(s) {
          return s.n === name;
        });
        if (null == s) console.log("not found"); else {
          this.musicSource.clip = s.clip;
          this.musicSource.play();
        }
      },
      PlaySFX: function PlaySFX(name) {
        var s = this.sfxSound.find(function(s) {
          return s.n === name;
        });
        if (null == s) console.log("not found"); else {
          this.sfxSource.clip = s.clip;
          this.sfxSource.play();
        }
      },
      MusicVolum: function MusicVolum() {
        this.musicSource.volume = this.musicSlider.progress;
        if (0 == this.musicSource.volume) {
          this.musicSprite.spriteFrame = this.offMusicSpriteFrame;
          this.state1 = false;
        } else {
          this.musicSprite.spriteFrame = this.onMusicSpriteFrame;
          this.state1 = true;
        }
      },
      SFXVolume: function SFXVolume() {
        this.sfxSource.volume = this.sfxSlider.progress;
        if (0 == this.sfxSource.volume) {
          this.sfxSprite.spriteFrame = this.offSFXSpriteFrame;
          this.state2 = false;
        } else {
          this.sfxSprite.spriteFrame = this.onSFXSpriteFrame;
          this.state2 = true;
        }
      },
      Show_stt: function Show_stt() {
        this.PlaySFX("Tap");
        this.setting.setPosition(0, 0);
      },
      Hide_stt: function Hide_stt() {
        this.PlaySFX("Tap");
        this.setting.setPosition(8e4, 932.136);
      }
    });
    cc._RF.pop();
  }, {
    SoundMN: "SoundMN"
  } ],
  loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bcadciQOgFEWI038LifpLV3", "loading");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        playNode: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.playNode.on(cc.Node.EventType.TOUCH_START, this.openGame, this);
        this.buttonanimation();
      },
      buttonanimation: function buttonanimation() {
        var button = this.playNode.addComponent(cc.Button);
        button.transition = cc.Button.Transition.SCALE;
        button.duration = .1;
        button.zoomScale = 1.05;
      },
      openGame: function openGame() {
        cc.director.loadScene("game");
      },
      quit: function quit() {
        cc.game.end();
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Audio", "SoundMN", "btnBetEven", "games", "loading" ]);