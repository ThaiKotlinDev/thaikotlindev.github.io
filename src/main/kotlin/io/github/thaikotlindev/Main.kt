package io.github.thaikotlindev

fun main(args: Array<String>) {

    app {
        nav("side-menu") {
            ul {
                li("hidden active") {
                    a("page-scroll")
                }

                menus.forEach {
                    li {
                        link(it.anchor, "page-scroll") {
                            span("menu-title") { text(it.title) }
                            span("dot")
                        }
                    }
                }
            }
        }

        div(className = "container-fluid") {
            div(id = "kotlin", className = "row hero-header") {
                div(className = "col-md-9") {
                    img(className = "logo", src = "images/meetup-logo.png")

                    h1 {
                        text("Attend the most awaited ")
                        strong("Kotlin")
                        text(" workshop of 2017")
                    }

                    h3 { text("to boost up your skill!") }
                    h4 { text("August, 2017") }

                    link("#next-event", "btn btn-lg btn-red page-scroll") {
                        text("More Detail")
                        span("ti-arrow-right")
                    }
                }

                div(className = "col-md-3 hidden-xs") {
                    img(className = "rocket animated bounce", src = "images/android_kotlin_flag.png")
                }
            }
        }

        div(className = "container") {
            div(className = "row me-row content-ct") {
                h2("row-title") { text("Why Kotlin Is Super Cool?") }

                features.forEach {
                    div(className = "col-md-3 feature") {
                        span(it.logo)
                        h3 { text(it.title) }
                        p(text = it.detail)
                    }
                }
            }

            div(id = "staff", className = "row me-row content-ct speaker") {
                h2("row-title") { text("Meet the Staff") }

                staffs.forEach {
                    div(className = "col-md-4 col-sm-6 feature") {
                        img(src = "images/staff/${it.image}", className = "speaker-img")
                        h3 { text(it.name) }
                        p(text = it.position)

                        ul("speaker-social") {
                            it.contacts.forEach {
                                li { link(it.link, attrs = mapOf("target" to "_blank")) { span(it.type.logo) } }
                            }
                        }
                    }
                }
            }
        }

        div(id = "next-event", className = "container-fluid tickets") {
            div(className = "row me-row content-ct") {
                h2("row-title") { text("Kotlin Workshop") }

                div(className = "col-md-12 col-sm-12") {
                    h2 { text("Ticket") }
                    p("price", "0 THB")
                    div(className = "detail") {
                        h3 {
                            text("Everything you need to know about writing ")
                            italic("Android")
                            text(" apps in ")
                            strong("Kotlin")
                            p(text = "The workshop has 4 sessions.")
                        }

                        ul {
                            li(className = "text-left") { text("Intro to Kotlin") }
                            li(className = "text-left") { text("Kotlin for Android Workshop") }
                            li(className = "text-left") { text("Workshop: Miracle of stdLib") }
                            li(className = "text-left") { text("Non-JVM Kotlin") }
                        }
                    }

                    br()
                    br()
                }
            }
        }

        div(className = "container") {
            div(id = "events", className = "row me-row schedule") {
                h2("row-title content-ct") { text("Past Events") }

                div(className = "col-md-12") {
                    ul("nav nav-tabs", "tablist") {
                        li("active", "presentation") {
                            link(to = "#meetup1", attrs = mapOf("aria-controls" to "meetup1", "role" to "tab", "data-toggle" to "tab")) {
                                text("Kotlin Meetup #1")
                            }
                        }

                        li(role = "presentation") {
                            link(to = "#kotlin-bkk", attrs = mapOf("aria-controls" to "kotlin-bkk", "role" to "tab", "data-toggle" to "tab")) {
                                text("Kotlin 1.1 Event BKK")
                            }
                        }
                    }

                    div(className = "tab-content") {
                        div(id = "meetup1", className = "tab-pane fade in active", attrs = mapOf("role" to "tabpanel")) {
                            div(className = "row") {
                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/meetup/01.jpg", attrs = mapOf("data-fancybox" to "meetup1")) {
                                        img(className = "img-responsive", src = "images/meetup/t01.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/meetup/02.jpg", attrs = mapOf("data-fancybox" to "meetup1")) {
                                        img(className = "img-responsive", src = "images/meetup/t02.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/meetup/03.jpg", attrs = mapOf("data-fancybox" to "meetup1")) {
                                        img(className = "img-responsive", src = "images/meetup/t03.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/meetup/04.jpg", attrs = mapOf("data-fancybox" to "meetup1")) {
                                        img(className = "img-responsive", src = "images/meetup/t04.jpg")
                                    }
                                }
                            }
                        }

                        div(id = "kotlin-bkk", className = "tab-pane fade", attrs = mapOf("role" to "tabpanel")) {
                            div(className = "row") {
                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/kotlinbkk/01.jpg", attrs = mapOf("data-fancybox" to "kotlinbkk")) {
                                        img(className = "img-responsive", src = "images/kotlinbkk/t01.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/kotlinbkk/02.jpg", attrs = mapOf("data-fancybox" to "kotlinbkk")) {
                                        img(className = "img-responsive", src = "images/kotlinbkk/t02.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/kotlinbkk/03.jpg", attrs = mapOf("data-fancybox" to "kotlinbkk")) {
                                        img(className = "img-responsive", src = "images/kotlinbkk/t03.jpg")
                                    }
                                }

                                div(className = "col-xs-12 col-sm-6 col-md-3") {
                                    link(to = "images/kotlinbkk/04.jpg", attrs = mapOf("data-fancybox" to "kotlinbkk")) {
                                        img(className = "img-responsive", src = "images/kotlinbkk/t04.jpg")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        div(id = "sponsorship", className = "container-fluid footer") {
            div(className = "row contact content-ct") {
                h2("row-title") { text("Sponsorship") }

                div(className = "col-md-12 col-sm-12") {
                    div(className = "pricing") {
                        div(className = "thumbnail") { div(className = "ti-medall") }
                        div(className = "title") { text("Gold") }
                        div(className = "content") {
                            div(className = "sub-title") { text("4,000 THB") }

                            ul {
                                li {
                                    italic("1")
                                    text(" seat guaranteed")
                                }

                                li {
                                    italic("Small")
                                    text(" logo on a backdrop")
                                }
                            }
                        }
                    }

                    div(className = "pricing") {
                        div(className = "thumbnail") { div(className = "ti-cup") }
                        div(className = "title") { text("Platinum") }
                        div(className = "content") {
                            div(className = "sub-title") { text("5,000 THB") }

                            ul {
                                li {
                                    strong("2")
                                    text(" seats guaranteed")
                                }

                                li {
                                    strong("Big")
                                    text(" logo on a backdrop")
                                }
                            }
                        }
                    }

                    div(className = "pricing") {
                        div(className = "thumbnail") { div(className = "ti-crown") }
                        div(className = "title") { text("Diamond") }
                        div(className = "content") {
                            div(className = "sub-title") { text("10,000 THB") }

                            ul {
                                li {
                                    strong("2")
                                    text(" seats guaranteed")
                                }

                                li {
                                    strong("Big")
                                    text(" logo on a backdrop")
                                }

                                li {
                                    strong("Logo on presentation slides")
                                    br()
                                    span("highlight") { strong("* The slides will be available for download on the internet until the end of time") }
                                }
                            }
                        }
                    }
                }
            }

            div(className = "row footer-credit") {
                div(className = "col-md-6 col-sm-6") {
                    p {
                        text("© 2017, ")
                        link(to = "https://thaikotlindev.github.io") { text("Thailand Kotlin Developer") }
                        text(" | All rights reserved.")
                    }
                }

                div(className = "col-md-6 col-sm-6") {
                    ul("footer-menu") {
                        li {
                            link(to = "https://www.facebook.com/groups/872547279487598/?ref=bookmarks") {
                                italic("ti-facebook", " Facebook Group")
                            }
                        }

                        li {
                            link(to = "mailto:thaikotlindev@gmail.com") {
                                italic("ti-email", " Contact Us")
                            }
                        }
                    }
                }
            }
        }
    }
}
