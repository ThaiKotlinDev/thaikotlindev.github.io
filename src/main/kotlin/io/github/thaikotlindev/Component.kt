package io.github.thaikotlindev

import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.appendText

fun app(id: String = "app", child: Child.() -> Unit): Element {
    val app = document.getElementById(id)!!
    Child(app).apply(child)
    return app
}

fun div(id: String, child: Child.() -> Unit): Element {
    val app = document.getElementById(id)!!
    Child(app).apply(child)
    return app
}

fun empty(id: String) {
    val div = document.getElementById(id)!!
    div.innerHTML = ""
}

fun Element.src(value: String = "") {
    setAttribute("src", value)
}

fun Element.width(value: String = "") {
    setAttribute("width", value)
}

fun Element.height(value: String = "") {
    setAttribute("height", value)
}

class Child(val parent: Element) {
    fun div(id: String = "", className: String = "", width: Int = 0, attrs: Map<String, String> = mapOf(), child: Child.() -> Unit = {}): Element {
        val div = element("div")

        if (className.isNotBlank()) div.addClass(className)
        if (id.isNotBlank()) div.id = id
        if (width != 0) div.setAttribute("width", "${width}px")

        attrs.entries.forEach {
            div.setAttribute(it.key, it.value)
        }

        parent.appendChild(div)

        Child(div).apply(child)

        return div
    }

    fun nav(className: String = "", child: Child.() -> Unit) {
        val nav = element("nav")
        if (className.isNotBlank()) nav.addClass(className)
        parent.appendChild(nav)
        Child(nav).apply(child)
    }

    fun h1(child: Child.() -> Unit = {}) {
        val h1 = element("h1")
        parent.appendChild(h1)
        Child(h1).apply(child)
    }

    fun h2(className: String = "", child: Child.() -> Unit = {}) {
        val h2 = element("h2")
        h2.addClass(className)
        parent.appendChild(h2)
        Child(h2).apply(child)
    }

    fun h3(child: Child.() -> Unit = {}) {
        val h3 = element("h3")
        parent.appendChild(h3)
        Child(h3).apply(child)
    }

    fun h4(child: Child.() -> Unit = {}) {
        val h4 = element("h4")
        parent.appendChild(h4)
        Child(h4).apply(child)
    }

    fun p(className: String = "", text: String) {
        val p = element("p")
        p.addClass(className)
        p.appendText(text)
        parent.appendChild(p)
    }

    fun p(className: String = "", child: Child.() -> Unit) {
        val p = element("p")
        p.addClass(className)
        parent.appendChild(p)
        Child(p).apply(child)
    }

    fun strong(child: Child.() -> Unit) {
        val strong = element("strong")
        parent.appendChild(strong)
        Child(strong).apply(child)
    }

    fun strong(text: String = "") {
        val strong = element("strong")
        strong.appendText(text)
        parent.appendChild(strong)
    }

    fun italic(className: String = "", text: String = "") {
        val italic = element("i")
        italic.addClass(className)
        italic.appendText(text)
        parent.appendChild(italic)
    }

    fun link(to: String = "", className: String = "", attrs: Map<String, String> = mapOf(), child: Child.() -> Unit = {}) {
        val a = element("a")
        a.addClass(className)
        a.setAttribute("href", to)

        attrs.entries.forEach {
            a.setAttribute(it.key, it.value)
        }

        parent.appendChild(a)
        Child(a).apply(child)
    }

    fun a(id: String = "", className: String = "", onclick: () -> Unit = {}, child: Child.() -> Unit = {}) {
        val a = element("a")

        if (id.isNotBlank()) a.id = id
        if (className.isNotBlank()) a.addClass(className)

        a.addEventListener("click", {
            onclick()
        })

        parent.appendChild(a)
        Child(a).apply(child)
    }

    fun img(id: String = "", className: String = "", src: String = "", block: Element.() -> Unit = {}) {
        val img = element("img").apply {
            this.id = id
            addClass(className)
            setAttribute("src", src)
            block()
        }

        parent.appendChild(img)
    }

    fun span(className: String = "", child: Child.() -> Unit = {}) {
        val span = element("span")
        span.addClass(className)
        parent.appendChild(span)
        Child(span).apply(child)
    }

    fun text(text: String = "") {
        parent.appendChild(document.createTextNode(text))
    }

    fun br() {
        parent.appendChild(element("br"))
    }

    fun ul(className: String = "", role: String = "", child: Child.() -> Unit) {
        val ul = element("ul")
        ul.addClass(className)
        ul.setAttribute("role", role)
        parent.appendChild(ul)
        Child(ul).apply(child)
    }

    fun li(className: String = "", role: String = "", child: Child.() -> Unit): Element {
        val li = element("li")
        li.addClass(className)
        li.setAttribute("role", role)
        parent.appendChild(li)
        Child(li).apply(child)
        return li
    }

    fun editText(id: String = ""): Element {
        val editText = element("input")

        if (id.isNotBlank()) editText.id = id

        editText.addClass("input")
        editText.setAttribute("type", "text")
        parent.appendChild(editText)

        return editText
    }

    fun button(text: String, onclick: () -> Unit) {
        val button = element("button").appendText(text)
        button.className = "button is-info"

        button.addEventListener("click", {
            onclick()
        })

        parent.appendChild(button)
    }

    private fun element(name: String): Element {
        return document.createElement(name)
    }
}