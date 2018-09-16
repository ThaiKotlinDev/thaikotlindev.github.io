package io.github.thaikotlindev

import io.github.thaikotlindev.enum.ContactType
import io.github.thaikotlindev.model.Contact
import io.github.thaikotlindev.model.Feature
import io.github.thaikotlindev.model.Menu
import io.github.thaikotlindev.model.Staff

val menus = listOf(
        Menu("Hello Kotlin", "#kotlin"),
        Menu("Staff", "#staff"),
        Menu("Next Event", "#next-event"),
        Menu("Events", "#events")
        // ,
        // Menu("Sponsorship", "#sponsorship")
)

val features = listOf(
        Feature("Productivity",
                """Some people say Kotlin is like Java on steroid, it can do all the stuff Java can do, plus
                        varieties of language features will boost your productivity like never before.""", "ti-stats-up"),
        Feature("Interoperable",
                """Kotlin is statically typed, modern and mature. It was designed with Java interoperability
                        in mind so you can write Kotlin everywhere Java goes, seamlessly, side by side.
                        All those libraries written in Java over the past 20 years are still work.""", "ti-check"),
        Feature("Versatile",
                """Kotlin has great tooling support. Why? Because it was created by JetBrains, the people who
                        built IntelliJ which Android Studio is based on, and
                        we love Android Studio.""", "ti-world"),
        Feature("First-class citizen",
                """Recently in IO ’17, Google announced a first class support for Kotlin in Android development.
                        People went crazy about this. There are tons of videos and articles about Kotlin all over the internet.
                        All the cool kids these day write Kotlin, so why don’t you.""", "ti-android")
)

val staffs = listOf(
        Staff("Birth", "verachad.jpg", "Senior Android Developer @ Agoda",
                mutableListOf(
                        Contact("https://github.com/verachadW", ContactType.GITHUB),
                        Contact("https://twitter.com/verachadw", ContactType.TWITTER),
                        Contact("https://www.linkedin.com/in/verachadw", ContactType.LINKEDIN)
                )),

        Staff("Dew", "dew.jpg", "Mobile Developer @ Ampos, Co-Founder/Editor at Black Lens Publication",
                mutableListOf(
                        Contact("http://blacklenspub.com", ContactType.WEB),
                        Contact("https://github.com/dewparin", ContactType.GITHUB),
                        Contact("https://medium.com/@dewparin", ContactType.MEDIUM),
                        Contact("https://twitter.com/dewparin", ContactType.TWITTER)
                )),

        Staff("Travis P", "travisp.jpg", "Kotlin God @ SCB, Co-Founder/Editor at Black Lens Publication",
                mutableListOf(
                        Contact("http://blacklenspub.com", ContactType.WEB),
                        Contact("https://github.com/travisp101", ContactType.GITHUB),
                        Contact("https://www.facebook.com/travisp101", ContactType.FACEBOOK),
                        Contact("https://twitter.com/travisp101", ContactType.TWITTER)
                )),

        Staff("Pop", "pop.jpg", "Android ❤ Kotlin @ King Power",
                mutableListOf(
                        Contact("https://github.com/minibugdev", ContactType.GITHUB),
                        Contact("https://www.facebook.com/teeranai.b", ContactType.FACEBOOK),
                        Contact("https://www.linkedin.com/in/teeranaib", ContactType.LINKEDIN)
                )),

        Staff("Babe", "babe.jpg", "Mobile Develoepr @ Event Pop, Editor at Black Lens Publication",
                mutableListOf(
                        Contact("http://blacklenspub.com", ContactType.WEB),
                        Contact("https://github.com/babedev", ContactType.GITHUB),
                        Contact("https://medium.com/@babedev", ContactType.MEDIUM),
                        Contact("https://www.facebook.com/babedev", ContactType.FACEBOOK),
                        Contact("https://plus.google.com/+ChristopherNg", ContactType.GOOGLE)
                )),

        Staff("Ju", "ju.jpg", "Developer & Drummer",
                mutableListOf(
                        Contact("https://github.com/judrummer", ContactType.GITHUB),
                        Contact("https://www.youtube.com/c/JuDrummer", ContactType.YOUTUBE),
                        Contact("https://www.facebook.com/judrummer", ContactType.FACEBOOK)
                )),

        Staff("Air", "air.jpg", "Android Developer @ Agoda"),
        Staff("Tow", "tow.jpg", "Freelance Android Developer")
)
