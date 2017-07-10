package io.github.thaikotlindev.model

data class Staff(val name: String = "",
                 val image: String = "",
                 val position: String = "",
                 val contacts: MutableList<Contact> = mutableListOf())
