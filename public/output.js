if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  ContactType.prototype = Object.create(Enum.prototype);
  ContactType.prototype.constructor = ContactType;
  function app(id, child) {
    if (id === void 0)
      id = 'app';
    var app = ensureNotNull(document.getElementById(id));
    child(new Child(app));
    return app;
  }
  function div(id, child) {
    var app = ensureNotNull(document.getElementById(id));
    child(new Child(app));
    return app;
  }
  function empty(id) {
    var div = ensureNotNull(document.getElementById(id));
    div.innerHTML = '';
  }
  function src($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('src', value);
  }
  function width($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('width', value);
  }
  function height($receiver, value) {
    if (value === void 0)
      value = '';
    $receiver.setAttribute('height', value);
  }
  function Child(parent) {
    this.parent = parent;
  }
  function Child$div$lambda($receiver) {
    return Unit;
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  Child.prototype.div_qf6fe3$ = function (id, className, width, attrs, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (width === void 0)
      width = 0;
    if (attrs === void 0) {
      attrs = emptyMap();
    }
    if (child === void 0)
      child = Child$div$lambda;
    var div = this.element_0('div');
    if (!isBlank(className))
      addClass(div, [className]);
    if (!isBlank(id))
      div.id = id;
    if (width !== 0)
      div.setAttribute('width', width.toString() + 'px');
    var tmp$;
    tmp$ = attrs.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      div.setAttribute(element.key, element.value);
    }
    this.parent.appendChild(div);
    child(new Child(div));
    return div;
  };
  Child.prototype.nav_9jyg1o$ = function (className, child) {
    if (className === void 0)
      className = '';
    var nav = this.element_0('nav');
    if (!isBlank(className))
      addClass(nav, [className]);
    this.parent.appendChild(nav);
    child(new Child(nav));
  };
  function Child$h1$lambda($receiver) {
    return Unit;
  }
  Child.prototype.h1_tlpz1u$ = function (child) {
    if (child === void 0)
      child = Child$h1$lambda;
    var h1 = this.element_0('h1');
    this.parent.appendChild(h1);
    child(new Child(h1));
  };
  function Child$h2$lambda($receiver) {
    return Unit;
  }
  Child.prototype.h2_9jyg1o$ = function (className, child) {
    if (className === void 0)
      className = '';
    if (child === void 0)
      child = Child$h2$lambda;
    var h2 = this.element_0('h2');
    addClass(h2, [className]);
    this.parent.appendChild(h2);
    child(new Child(h2));
  };
  function Child$h3$lambda($receiver) {
    return Unit;
  }
  Child.prototype.h3_tlpz1u$ = function (child) {
    if (child === void 0)
      child = Child$h3$lambda;
    var h3 = this.element_0('h3');
    this.parent.appendChild(h3);
    child(new Child(h3));
  };
  function Child$h4$lambda($receiver) {
    return Unit;
  }
  Child.prototype.h4_tlpz1u$ = function (child) {
    if (child === void 0)
      child = Child$h4$lambda;
    var h4 = this.element_0('h4');
    this.parent.appendChild(h4);
    child(new Child(h4));
  };
  Child.prototype.p_puj7f4$ = function (className, text) {
    if (className === void 0)
      className = '';
    var p = this.element_0('p');
    addClass(p, [className]);
    appendText(p, text);
    this.parent.appendChild(p);
  };
  Child.prototype.p_9jyg1o$ = function (className, child) {
    if (className === void 0)
      className = '';
    var p = this.element_0('p');
    addClass(p, [className]);
    this.parent.appendChild(p);
    child(new Child(p));
  };
  Child.prototype.strong_tlpz1u$ = function (child) {
    var strong = this.element_0('strong');
    this.parent.appendChild(strong);
    child(new Child(strong));
  };
  Child.prototype.strong_61zpoe$ = function (text) {
    if (text === void 0)
      text = '';
    var strong = this.element_0('strong');
    appendText(strong, text);
    this.parent.appendChild(strong);
  };
  Child.prototype.italic_puj7f4$ = function (className, text) {
    if (className === void 0)
      className = '';
    if (text === void 0)
      text = '';
    var italic = this.element_0('i');
    addClass(italic, [className]);
    appendText(italic, text);
    this.parent.appendChild(italic);
  };
  function Child$link$lambda($receiver) {
    return Unit;
  }
  Child.prototype.link_hsosmf$ = function (to, className, attrs, child) {
    if (to === void 0)
      to = '';
    if (className === void 0)
      className = '';
    if (attrs === void 0) {
      attrs = emptyMap();
    }
    if (child === void 0)
      child = Child$link$lambda;
    var a = this.element_0('a');
    addClass(a, [className]);
    a.setAttribute('href', to);
    var tmp$;
    tmp$ = attrs.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      a.setAttribute(element.key, element.value);
    }
    this.parent.appendChild(a);
    child(new Child(a));
  };
  function Child$a$lambda() {
    return Unit;
  }
  function Child$a$lambda_0($receiver) {
    return Unit;
  }
  function Child$a$lambda_1(closure$onclick) {
    return function (it) {
      closure$onclick();
      return Unit;
    };
  }
  Child.prototype.a_wrtstz$ = function (id, className, onclick, child) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (onclick === void 0)
      onclick = Child$a$lambda;
    if (child === void 0)
      child = Child$a$lambda_0;
    var a = this.element_0('a');
    if (!isBlank(id))
      a.id = id;
    if (!isBlank(className))
      addClass(a, [className]);
    a.addEventListener('click', Child$a$lambda_1(onclick));
    this.parent.appendChild(a);
    child(new Child(a));
  };
  function Child$img$lambda($receiver) {
    return Unit;
  }
  Child.prototype.img_lmu3us$ = function (id, className, src, block) {
    if (id === void 0)
      id = '';
    if (className === void 0)
      className = '';
    if (src === void 0)
      src = '';
    if (block === void 0)
      block = Child$img$lambda;
    var $receiver = this.element_0('img');
    $receiver.id = id;
    addClass($receiver, [className]);
    $receiver.setAttribute('src', src);
    block($receiver);
    var img = $receiver;
    this.parent.appendChild(img);
  };
  function Child$span$lambda($receiver) {
    return Unit;
  }
  Child.prototype.span_9jyg1o$ = function (className, child) {
    if (className === void 0)
      className = '';
    if (child === void 0)
      child = Child$span$lambda;
    var span = this.element_0('span');
    addClass(span, [className]);
    this.parent.appendChild(span);
    child(new Child(span));
  };
  Child.prototype.text_61zpoe$ = function (text) {
    if (text === void 0)
      text = '';
    this.parent.appendChild(document.createTextNode(text));
  };
  Child.prototype.br = function () {
    this.parent.appendChild(this.element_0('br'));
  };
  Child.prototype.ul_7jt3u2$ = function (className, role, child) {
    if (className === void 0)
      className = '';
    if (role === void 0)
      role = '';
    var ul = this.element_0('ul');
    addClass(ul, [className]);
    ul.setAttribute('role', role);
    this.parent.appendChild(ul);
    child(new Child(ul));
  };
  Child.prototype.li_7jt3u2$ = function (className, role, child) {
    if (className === void 0)
      className = '';
    if (role === void 0)
      role = '';
    var li = this.element_0('li');
    addClass(li, [className]);
    li.setAttribute('role', role);
    this.parent.appendChild(li);
    child(new Child(li));
    return li;
  };
  Child.prototype.editText_61zpoe$ = function (id) {
    if (id === void 0)
      id = '';
    var editText = this.element_0('input');
    if (!isBlank(id))
      editText.id = id;
    addClass(editText, ['input']);
    editText.setAttribute('type', 'text');
    this.parent.appendChild(editText);
    return editText;
  };
  function Child$button$lambda(closure$onclick) {
    return function (it) {
      closure$onclick();
      return Unit;
    };
  }
  Child.prototype.button_a4mwiz$ = function (text, onclick) {
    var button = appendText(this.element_0('button'), text);
    button.className = 'button is-info';
    button.addEventListener('click', Child$button$lambda(onclick));
    this.parent.appendChild(button);
  };
  Child.prototype.element_0 = function (name) {
    return document.createElement(name);
  };
  Child.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Child',
    interfaces: []
  };
  var menus;
  var features;
  var staffs;
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.a_wrtstz$('page-scroll');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.text_61zpoe$(closure$it.title);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.span_9jyg1o$('menu-title', main$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      $receiver.span_9jyg1o$('dot');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.link_hsosmf$(closure$it.anchor, 'page-scroll', void 0, main$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.li_7jt3u2$('hidden active', void 0, main$lambda$lambda$lambda$lambda);
    var tmp$;
    tmp$ = menus.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.li_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda(element));
    }
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    $receiver.ul_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text_61zpoe$('Kotlin Meet Up 1.2.70');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text_61zpoe$('18:00 - 21:00 @ Learn Hub');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('18 October, 2018');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.text_61zpoe$('More Detail');
    $receiver.span_9jyg1o$('ti-arrow-right');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.h1_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.h3_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.h4_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.link_hsosmf$('#next-event', 'btn btn-lg btn-red page-scroll', void 0, main$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.img_lmu3us$(void 0, 'rocket animated bounce', 'images/android_kotlin_flag.png');
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-md-9', void 0, void 0, main$lambda$lambda$lambda$lambda_0);
    $receiver.div_qf6fe3$(void 0, 'col-md-3 hidden-xs', void 0, void 0, main$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.div_qf6fe3$('kotlin', 'row hero-header', void 0, void 0, main$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('Why Kotlin Is Super Cool?');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.text_61zpoe$(closure$it.title);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_4(closure$it) {
    return function ($receiver) {
      $receiver.span_9jyg1o$(closure$it.logo);
      $receiver.h3_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it));
      $receiver.p_puj7f4$(void 0, closure$it.detail);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_1($receiver) {
    $receiver.h2_9jyg1o$('row-title', main$lambda$lambda$lambda$lambda_2);
    var tmp$;
    tmp$ = features.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.div_qf6fe3$(void 0, 'col-md-3 feature', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_4(element));
    }
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.text_61zpoe$('Meet the Staff');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it) {
    return function ($receiver) {
      $receiver.text_61zpoe$(closure$it.name);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.span_9jyg1o$(closure$it.type.logo);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.link_hsosmf$(closure$it.link, void 0, mapOf(to('target', '_blank')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$it));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$it.contacts.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.li_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_5(closure$it) {
    return function ($receiver) {
      $receiver.img_lmu3us$(void 0, 'speaker-img', 'images/staff/' + closure$it.image);
      $receiver.h3_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$it));
      $receiver.p_puj7f4$(void 0, closure$it.position);
      $receiver.ul_7jt3u2$('speaker-social', void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$it));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2($receiver) {
    $receiver.h2_9jyg1o$('row-title', main$lambda$lambda$lambda$lambda_3);
    var tmp$;
    tmp$ = staffs.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.div_qf6fe3$(void 0, 'col-md-4 col-sm-6 feature', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_5(element));
    }
    return Unit;
  }
  function main$lambda$lambda_1($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row me-row content-ct', void 0, void 0, main$lambda$lambda$lambda_1);
    $receiver.div_qf6fe3$('staff', 'row me-row content-ct speaker', void 0, void 0, main$lambda$lambda$lambda_2);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text_61zpoe$('Kotlin Meet Up 1.2.70');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text_61zpoe$('Ticket');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.text_61zpoe$('Everything you need to know about writing ');
    $receiver.italic_puj7f4$('Android');
    $receiver.text_61zpoe$(' apps in ');
    $receiver.strong_61zpoe$('Kotlin');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text_61zpoe$("Write a better code with Conductor's Controller by Kittinun Vantasin, Mobile developer @ Mercari");
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.text_61zpoe$('Start your Firebase admin with Kotlin by Kotlin2JS by Theerasan Tonthonkam, Android develoepr @ Eatigo');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.li_7jt3u2$('text-left', void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.li_7jt3u2$('text-left', void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.h3_tlpz1u$(main$lambda$lambda$lambda$lambda$lambda$lambda_3);
    $receiver.ul_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.h2_9jyg1o$(void 0, main$lambda$lambda$lambda$lambda$lambda_6);
    $receiver.p_puj7f4$('price', 'Free');
    $receiver.div_qf6fe3$(void 0, 'detail', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_7);
    $receiver.br();
    $receiver.br();
    return Unit;
  }
  function main$lambda$lambda$lambda_3($receiver) {
    $receiver.h2_9jyg1o$('row-title', main$lambda$lambda$lambda$lambda_4);
    $receiver.div_qf6fe3$(void 0, 'col-md-12 col-sm-12', void 0, void 0, main$lambda$lambda$lambda$lambda_5);
    return Unit;
  }
  function main$lambda$lambda_2($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row me-row content-ct', void 0, void 0, main$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text_61zpoe$('Past Events');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('Kotlin Meetup #1');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.link_hsosmf$('#meetup1', void 0, mapOf_0([to('aria-controls', 'meetup1'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.text_61zpoe$('Kotlin 1.1');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.link_hsosmf$('#kotlin-bkk', void 0, mapOf_0([to('aria-controls', 'kotlin-bkk'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text_61zpoe$('Kotlin Workshop');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.link_hsosmf$('#kotlin-workshop', void 0, mapOf_0([to('aria-controls', 'workshop'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.text_61zpoe$('Kotlin 1.2');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.link_hsosmf$('#kotlin-1_2', void 0, mapOf_0([to('aria-controls', 'kotlin-1_2'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.text_61zpoe$('Kotlin 1.2.41');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.link_hsosmf$('#kotlin-1_2_41', void 0, mapOf_0([to('aria-controls', 'kotlin-1_2_41'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.text_61zpoe$('Mobile Conf 2018');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.link_hsosmf$('#mobconf18', void 0, mapOf_0([to('aria-controls', 'mobconf18'), to('role', 'tab'), to('data-toggle', 'tab')]), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.li_7jt3u2$('active', 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_5);
    $receiver.li_7jt3u2$(void 0, 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_6);
    $receiver.li_7jt3u2$(void 0, 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_7);
    $receiver.li_7jt3u2$(void 0, 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_8);
    $receiver.li_7jt3u2$(void 0, 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_9);
    $receiver.li_7jt3u2$(void 0, 'presentation', main$lambda$lambda$lambda$lambda$lambda$lambda_10);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup/t01.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.link_hsosmf$('images/meetup/01.jpg', void 0, mapOf(to('data-fancybox', 'meetup1')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup/t02.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.link_hsosmf$('images/meetup/02.jpg', void 0, mapOf(to('data-fancybox', 'meetup1')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup/t03.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.link_hsosmf$('images/meetup/03.jpg', void 0, mapOf(to('data-fancybox', 'meetup1')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup/t04.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.link_hsosmf$('images/meetup/04.jpg', void 0, mapOf(to('data-fancybox', 'meetup1')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/kotlinbkk/t01.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.link_hsosmf$('images/kotlinbkk/01.jpg', void 0, mapOf(to('data-fancybox', 'kotlinbkk')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/kotlinbkk/t02.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.link_hsosmf$('images/kotlinbkk/02.jpg', void 0, mapOf(to('data-fancybox', 'kotlinbkk')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/kotlinbkk/t03.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.link_hsosmf$('images/kotlinbkk/03.jpg', void 0, mapOf(to('data-fancybox', 'kotlinbkk')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/kotlinbkk/t04.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.link_hsosmf$('images/kotlinbkk/04.jpg', void 0, mapOf(to('data-fancybox', 'kotlinbkk')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_1.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_1.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_2.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_2.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_3.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_3.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_4.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_4.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_5.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_5.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_6.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_6.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_7.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_7.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/workshop/workshop_8.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.link_hsosmf$('images/workshop/workshop_8.jpg', void 0, mapOf(to('data-fancybox', 'workshop')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/1.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/1.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/2.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/2.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/3.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/3.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/4.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/4.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_20($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/5.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_20($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/5.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_20);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_21($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/6.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_21($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/6.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_21);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_22($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/7.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_22($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/7.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_22);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_23($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2/8.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_23($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2/8.jpg', void 0, mapOf(to('data-fancybox', 'kotlin_1_2')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_23);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_20);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_21);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_22);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_23);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12);
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_24($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/1.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_24($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/1.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_24);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_25($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/2.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_25($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/2.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_25);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_26($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/3.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_26($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/3.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_26);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_27($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/4.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_27($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/4.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_27);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_24);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_25);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_26);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_27);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_28($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/5.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_28($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/5.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_28);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_29($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/6.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_29($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/6.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_29);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_30($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/7.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_30($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/7.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_30);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_31($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/meetup_1_2_41/8.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_31($receiver) {
    $receiver.link_hsosmf$('images/meetup_1_2_41/8.jpg', void 0, mapOf(to('data-fancybox', 'kotlin-1_2_41')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_31);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_28);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_29);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_30);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_31);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14);
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_32($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/1.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_32($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/1.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_32);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_33($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/2.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_33($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/2.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_33);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_34($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/3.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_34($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/3.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_34);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_35($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/4.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_35($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/4.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_35);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_32);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_33);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_34);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_35);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_36($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/5.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_36($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/5.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_36);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_37($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/6.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_37($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/6.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_37);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_38($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/7.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_38($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/7.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_38);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_39($receiver) {
    $receiver.img_lmu3us$(void 0, 'img-responsive', 'images/mobconf18/8.jpg');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_39($receiver) {
    $receiver.link_hsosmf$('images/mobconf18/8.jpg', void 0, mapOf(to('data-fancybox', 'mobconf18')), main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_39);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_36);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_37);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_38);
    $receiver.div_qf6fe3$(void 0, 'col-xs-12 col-sm-6 col-md-3', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_39);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16);
    $receiver.div_qf6fe3$(void 0, 'row', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.div_qf6fe3$('meetup1', 'tab-pane fade in active', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_11);
    $receiver.div_qf6fe3$('kotlin-bkk', 'tab-pane fade', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_12);
    $receiver.div_qf6fe3$('kotlin-workshop', 'tab-pane fade', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_13);
    $receiver.div_qf6fe3$('kotlin-1_2', 'tab-pane fade', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_14);
    $receiver.div_qf6fe3$('kotlin-1_2_41', 'tab-pane fade', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_15);
    $receiver.div_qf6fe3$('mobconf18', 'tab-pane fade', void 0, mapOf(to('role', 'tabpanel')), main$lambda$lambda$lambda$lambda$lambda$lambda_16);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.ul_7jt3u2$('nav nav-tabs', 'tablist', main$lambda$lambda$lambda$lambda$lambda_8);
    $receiver.div_qf6fe3$(void 0, 'tab-content', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function main$lambda$lambda$lambda_4($receiver) {
    $receiver.h2_9jyg1o$('row-title content-ct', main$lambda$lambda$lambda$lambda_6);
    $receiver.div_qf6fe3$(void 0, 'col-md-12', void 0, void 0, main$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function main$lambda$lambda_3($receiver) {
    $receiver.div_qf6fe3$('events', 'row me-row schedule', void 0, void 0, main$lambda$lambda$lambda_4);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver) {
    $receiver.text_61zpoe$('Thailand Kotlin Developer');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.text_61zpoe$('\xA9 2017, ');
    $receiver.link_hsosmf$('https://thaikotlindev.github.io', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_17);
    $receiver.text_61zpoe$(' | All rights reserved.');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.p_9jyg1o$(void 0, main$lambda$lambda$lambda$lambda$lambda_10);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.italic_puj7f4$('ti-facebook', ' Facebook Group');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver) {
    $receiver.link_hsosmf$('https://www.facebook.com/groups/872547279487598/?ref=bookmarks', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.italic_puj7f4$('ti-email', ' Contact Us');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver) {
    $receiver.link_hsosmf$('mailto:thaikotlindev@gmail.com', void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda$lambda_19);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.li_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_18);
    $receiver.li_7jt3u2$(void 0, void 0, main$lambda$lambda$lambda$lambda$lambda$lambda_19);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.ul_7jt3u2$('footer-menu', void 0, main$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function main$lambda$lambda$lambda_5($receiver) {
    $receiver.div_qf6fe3$(void 0, 'col-md-6 col-sm-6', void 0, void 0, main$lambda$lambda$lambda$lambda_8);
    $receiver.div_qf6fe3$(void 0, 'col-md-6 col-sm-6', void 0, void 0, main$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function main$lambda$lambda_4($receiver) {
    $receiver.div_qf6fe3$(void 0, 'row footer-credit', void 0, void 0, main$lambda$lambda$lambda_5);
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.nav_9jyg1o$('side-menu', main$lambda$lambda);
    $receiver.div_qf6fe3$(void 0, 'container-fluid', void 0, void 0, main$lambda$lambda_0);
    $receiver.div_qf6fe3$(void 0, 'container', void 0, void 0, main$lambda$lambda_1);
    $receiver.div_qf6fe3$('next-event', 'container-fluid tickets', void 0, void 0, main$lambda$lambda_2);
    $receiver.div_qf6fe3$(void 0, 'container', void 0, void 0, main$lambda$lambda_3);
    $receiver.div_qf6fe3$('sponsorship', 'container-fluid footer', void 0, void 0, main$lambda$lambda_4);
    return Unit;
  }
  function main(args) {
    app(void 0, main$lambda);
  }
  function ContactType(name, ordinal, logo) {
    Enum.call(this);
    this.logo = logo;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ContactType_initFields() {
    ContactType_initFields = function () {
    };
    ContactType$WEB_instance = new ContactType('WEB', 0, 'ti-world');
    ContactType$GITHUB_instance = new ContactType('GITHUB', 1, 'ti-github');
    ContactType$MEDIUM_instance = new ContactType('MEDIUM', 2, 'ti-marker-alt');
    ContactType$FACEBOOK_instance = new ContactType('FACEBOOK', 3, 'ti-facebook');
    ContactType$YOUTUBE_instance = new ContactType('YOUTUBE', 4, 'ti-youtube');
    ContactType$TWITTER_instance = new ContactType('TWITTER', 5, 'ti-twitter-alt');
    ContactType$LINKEDIN_instance = new ContactType('LINKEDIN', 6, 'ti-linkedin');
    ContactType$GOOGLE_instance = new ContactType('GOOGLE', 7, 'ti-google');
  }
  var ContactType$WEB_instance;
  function ContactType$WEB_getInstance() {
    ContactType_initFields();
    return ContactType$WEB_instance;
  }
  var ContactType$GITHUB_instance;
  function ContactType$GITHUB_getInstance() {
    ContactType_initFields();
    return ContactType$GITHUB_instance;
  }
  var ContactType$MEDIUM_instance;
  function ContactType$MEDIUM_getInstance() {
    ContactType_initFields();
    return ContactType$MEDIUM_instance;
  }
  var ContactType$FACEBOOK_instance;
  function ContactType$FACEBOOK_getInstance() {
    ContactType_initFields();
    return ContactType$FACEBOOK_instance;
  }
  var ContactType$YOUTUBE_instance;
  function ContactType$YOUTUBE_getInstance() {
    ContactType_initFields();
    return ContactType$YOUTUBE_instance;
  }
  var ContactType$TWITTER_instance;
  function ContactType$TWITTER_getInstance() {
    ContactType_initFields();
    return ContactType$TWITTER_instance;
  }
  var ContactType$LINKEDIN_instance;
  function ContactType$LINKEDIN_getInstance() {
    ContactType_initFields();
    return ContactType$LINKEDIN_instance;
  }
  var ContactType$GOOGLE_instance;
  function ContactType$GOOGLE_getInstance() {
    ContactType_initFields();
    return ContactType$GOOGLE_instance;
  }
  ContactType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactType',
    interfaces: [Enum]
  };
  function ContactType$values() {
    return [ContactType$WEB_getInstance(), ContactType$GITHUB_getInstance(), ContactType$MEDIUM_getInstance(), ContactType$FACEBOOK_getInstance(), ContactType$YOUTUBE_getInstance(), ContactType$TWITTER_getInstance(), ContactType$LINKEDIN_getInstance(), ContactType$GOOGLE_getInstance()];
  }
  ContactType.values = ContactType$values;
  function ContactType$valueOf(name) {
    switch (name) {
      case 'WEB':
        return ContactType$WEB_getInstance();
      case 'GITHUB':
        return ContactType$GITHUB_getInstance();
      case 'MEDIUM':
        return ContactType$MEDIUM_getInstance();
      case 'FACEBOOK':
        return ContactType$FACEBOOK_getInstance();
      case 'YOUTUBE':
        return ContactType$YOUTUBE_getInstance();
      case 'TWITTER':
        return ContactType$TWITTER_getInstance();
      case 'LINKEDIN':
        return ContactType$LINKEDIN_getInstance();
      case 'GOOGLE':
        return ContactType$GOOGLE_getInstance();
      default:throwISE('No enum constant io.github.thaikotlindev.enum.ContactType.' + name);
    }
  }
  ContactType.valueOf_61zpoe$ = ContactType$valueOf;
  function Contact(link, type) {
    if (link === void 0)
      link = '';
    this.link = link;
    this.type = type;
  }
  Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  Contact.prototype.component1 = function () {
    return this.link;
  };
  Contact.prototype.component2 = function () {
    return this.type;
  };
  Contact.prototype.copy_10wb6c$ = function (link, type) {
    return new Contact(link === void 0 ? this.link : link, type === void 0 ? this.type : type);
  };
  Contact.prototype.toString = function () {
    return 'Contact(link=' + Kotlin.toString(this.link) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Contact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Contact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.link, other.link) && Kotlin.equals(this.type, other.type)))));
  };
  function Feature(title, detail, logo) {
    if (title === void 0)
      title = '';
    if (detail === void 0)
      detail = '';
    if (logo === void 0)
      logo = '';
    this.title = title;
    this.detail = detail;
    this.logo = logo;
  }
  Feature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Feature',
    interfaces: []
  };
  Feature.prototype.component1 = function () {
    return this.title;
  };
  Feature.prototype.component2 = function () {
    return this.detail;
  };
  Feature.prototype.component3 = function () {
    return this.logo;
  };
  Feature.prototype.copy_6hosri$ = function (title, detail, logo) {
    return new Feature(title === void 0 ? this.title : title, detail === void 0 ? this.detail : detail, logo === void 0 ? this.logo : logo);
  };
  Feature.prototype.toString = function () {
    return 'Feature(title=' + Kotlin.toString(this.title) + (', detail=' + Kotlin.toString(this.detail)) + (', logo=' + Kotlin.toString(this.logo)) + ')';
  };
  Feature.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.detail) | 0;
    result = result * 31 + Kotlin.hashCode(this.logo) | 0;
    return result;
  };
  Feature.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.detail, other.detail) && Kotlin.equals(this.logo, other.logo)))));
  };
  function Menu(title, anchor) {
    if (title === void 0)
      title = '';
    if (anchor === void 0)
      anchor = '';
    this.title = title;
    this.anchor = anchor;
  }
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: []
  };
  Menu.prototype.component1 = function () {
    return this.title;
  };
  Menu.prototype.component2 = function () {
    return this.anchor;
  };
  Menu.prototype.copy_puj7f4$ = function (title, anchor) {
    return new Menu(title === void 0 ? this.title : title, anchor === void 0 ? this.anchor : anchor);
  };
  Menu.prototype.toString = function () {
    return 'Menu(title=' + Kotlin.toString(this.title) + (', anchor=' + Kotlin.toString(this.anchor)) + ')';
  };
  Menu.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchor) | 0;
    return result;
  };
  Menu.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.anchor, other.anchor)))));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Staff(name, image, position, contacts) {
    if (name === void 0)
      name = '';
    if (image === void 0)
      image = '';
    if (position === void 0)
      position = '';
    if (contacts === void 0) {
      contacts = ArrayList_init();
    }
    this.name = name;
    this.image = image;
    this.position = position;
    this.contacts = contacts;
  }
  Staff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Staff',
    interfaces: []
  };
  Staff.prototype.component1 = function () {
    return this.name;
  };
  Staff.prototype.component2 = function () {
    return this.image;
  };
  Staff.prototype.component3 = function () {
    return this.position;
  };
  Staff.prototype.component4 = function () {
    return this.contacts;
  };
  Staff.prototype.copy_redb1s$ = function (name, image, position, contacts) {
    return new Staff(name === void 0 ? this.name : name, image === void 0 ? this.image : image, position === void 0 ? this.position : position, contacts === void 0 ? this.contacts : contacts);
  };
  Staff.prototype.toString = function () {
    return 'Staff(name=' + Kotlin.toString(this.name) + (', image=' + Kotlin.toString(this.image)) + (', position=' + Kotlin.toString(this.position)) + (', contacts=' + Kotlin.toString(this.contacts)) + ')';
  };
  Staff.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.contacts) | 0;
    return result;
  };
  Staff.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.position, other.position) && Kotlin.equals(this.contacts, other.contacts)))));
  };
  var package$io = _.io || (_.io = {});
  var package$github = package$io.github || (package$io.github = {});
  var package$thaikotlindev = package$github.thaikotlindev || (package$github.thaikotlindev = {});
  package$thaikotlindev.app_9jyg1o$ = app;
  package$thaikotlindev.div_9jyg1o$ = div;
  package$thaikotlindev.empty_61zpoe$ = empty;
  package$thaikotlindev.src_46n0ku$ = src;
  package$thaikotlindev.width_46n0ku$ = width;
  package$thaikotlindev.height_46n0ku$ = height;
  package$thaikotlindev.Child = Child;
  Object.defineProperty(package$thaikotlindev, 'menus', {
    get: function () {
      return menus;
    }
  });
  Object.defineProperty(package$thaikotlindev, 'features', {
    get: function () {
      return features;
    }
  });
  Object.defineProperty(package$thaikotlindev, 'staffs', {
    get: function () {
      return staffs;
    }
  });
  package$thaikotlindev.main_kand9s$ = main;
  Object.defineProperty(ContactType, 'WEB', {
    get: ContactType$WEB_getInstance
  });
  Object.defineProperty(ContactType, 'GITHUB', {
    get: ContactType$GITHUB_getInstance
  });
  Object.defineProperty(ContactType, 'MEDIUM', {
    get: ContactType$MEDIUM_getInstance
  });
  Object.defineProperty(ContactType, 'FACEBOOK', {
    get: ContactType$FACEBOOK_getInstance
  });
  Object.defineProperty(ContactType, 'YOUTUBE', {
    get: ContactType$YOUTUBE_getInstance
  });
  Object.defineProperty(ContactType, 'TWITTER', {
    get: ContactType$TWITTER_getInstance
  });
  Object.defineProperty(ContactType, 'LINKEDIN', {
    get: ContactType$LINKEDIN_getInstance
  });
  Object.defineProperty(ContactType, 'GOOGLE', {
    get: ContactType$GOOGLE_getInstance
  });
  var package$enum = package$thaikotlindev.enum || (package$thaikotlindev.enum = {});
  package$enum.ContactType = ContactType;
  var package$model = package$thaikotlindev.model || (package$thaikotlindev.model = {});
  package$model.Contact = Contact;
  package$model.Feature = Feature;
  package$model.Menu = Menu;
  package$model.Staff = Staff;
  menus = listOf([new Menu('Hello Kotlin', '#kotlin'), new Menu('Staff', '#staff'), new Menu('Next Event', '#next-event'), new Menu('Events', '#events')]);
  features = listOf([new Feature('Productivity', 'Some people say Kotlin is like Java on steroid, it can do all the stuff Java can do, plus\n                        varieties of language features will boost your productivity like never before.', 'ti-stats-up'), new Feature('Interoperable', 'Kotlin is statically typed, modern and mature. It was designed with Java interoperability\n                        in mind so you can write Kotlin everywhere Java goes, seamlessly, side by side.\n                        All those libraries written in Java over the past 20 years are still work.', 'ti-check'), new Feature('Versatile', 'Kotlin has great tooling support. Why? Because it was created by JetBrains, the people who\n                        built IntelliJ which Android Studio is based on, and\n                        we love Android Studio.', 'ti-world'), new Feature('First-class citizen', 'Recently in IO \u201917, Google announced a first class support for Kotlin in Android development.\n                        People went crazy about this. There are tons of videos and articles about Kotlin all over the internet.\n                        All the cool kids these day write Kotlin, so why don\u2019t you.', 'ti-android')]);
  staffs = listOf([new Staff('Birth', 'verachad.jpg', 'Senior Android Developer @ Agoda', mutableListOf([new Contact('https://github.com/verachadW', ContactType$GITHUB_getInstance()), new Contact('https://twitter.com/verachadw', ContactType$TWITTER_getInstance()), new Contact('https://www.linkedin.com/in/verachadw', ContactType$LINKEDIN_getInstance())])), new Staff('Dew', 'dew.jpg', 'Mobile Developer @ Ampos, Co-Founder/Editor at Black Lens Publication', mutableListOf([new Contact('http://blacklenspub.com', ContactType$WEB_getInstance()), new Contact('https://github.com/dewparin', ContactType$GITHUB_getInstance()), new Contact('https://medium.com/@dewparin', ContactType$MEDIUM_getInstance()), new Contact('https://twitter.com/dewparin', ContactType$TWITTER_getInstance())])), new Staff('Travis P', 'travisp.jpg', 'Kotlin God @ SCB, Co-Founder/Editor at Black Lens Publication', mutableListOf([new Contact('http://blacklenspub.com', ContactType$WEB_getInstance()), new Contact('https://github.com/travisp101', ContactType$GITHUB_getInstance()), new Contact('https://www.facebook.com/travisp101', ContactType$FACEBOOK_getInstance()), new Contact('https://twitter.com/travisp101', ContactType$TWITTER_getInstance())])), new Staff('Pop', 'pop.jpg', 'Android \u2764 Kotlin @ King Power', mutableListOf([new Contact('https://github.com/minibugdev', ContactType$GITHUB_getInstance()), new Contact('https://www.facebook.com/teeranai.b', ContactType$FACEBOOK_getInstance()), new Contact('https://www.linkedin.com/in/teeranaib', ContactType$LINKEDIN_getInstance())])), new Staff('Babe', 'babe.jpg', 'Mobile Developer @ Event Pop, Editor at Black Lens Publication', mutableListOf([new Contact('http://blacklenspub.com', ContactType$WEB_getInstance()), new Contact('https://github.com/babedev', ContactType$GITHUB_getInstance()), new Contact('https://medium.com/@babedev', ContactType$MEDIUM_getInstance()), new Contact('https://www.facebook.com/babedev', ContactType$FACEBOOK_getInstance()), new Contact('https://plus.google.com/+ChristopherNg', ContactType$GOOGLE_getInstance())])), new Staff('Ju', 'ju.jpg', 'Developer & Drummer', mutableListOf([new Contact('https://github.com/judrummer', ContactType$GITHUB_getInstance()), new Contact('https://www.youtube.com/c/JuDrummer', ContactType$YOUTUBE_getInstance()), new Contact('https://www.facebook.com/judrummer', ContactType$FACEBOOK_getInstance())])), new Staff('Air', 'air.jpg', 'Android Developer @ Agoda'), new Staff('Tow', 'tow.jpg', 'Freelance Android Developer')]);
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);

//# sourceMappingURL=output.js.map
