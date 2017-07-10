package io.github.thaikotlindev.model

import io.github.thaikotlindev.enum.ContactType

data class Contact(val link: String = "",
                   val type: ContactType)
