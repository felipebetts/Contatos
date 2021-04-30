const User = require("../models/User")
const { v4: uuidv4 } = require('uuid');


const deleteContact = async (req, res) => {
    const { userId, uuid } = req.body

    const user = await User.findOne({ _id: userId })

    if (!user) {
        return res.status(400).send({
            errors: [
                'Usuário nâo encontrado'
            ]
        })
    }

    const contacts = user.contacts

    const contact = []

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].uuid !== uuid) {
            contact.push(contacts[i])
        }
    }
    
    user.contacts = contact

    await user.save()

    return res.status(201).send({ ...user._doc })
}

const editContact = async (req, res) => {
    const {
        userId,
        uuid,
        name,
        surname,
        phone,
        dob,
        adress,
        email
    } = req.body

    const user = await User.findOne({ _id: userId })

    if (!user) {
        return res.status(400).send({
            errors: [
                'Usuário nâo encontrado'
            ]
        })
    }
    const contacts = user.contacts

    const contact = []

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].uuid === uuid) {
            console.log('aqui')
            var idx = i
            console.log('index: ', idx)
            contact.push({
                uuid,
                name,
                surname,
                phone,
                dob,
                adress,
                email
            })
        } else {
            contact.push(contacts[i])
        }
    }
    
    user.contacts = contact

    await user.save()
    console.log('name: ', name)
    console.log('contact: ', contact)

    return res.status(201).send({ ...user._doc })

}

const addContact = async (req, res) => {
    const {
        userId,
        name,
        surname,
        phone,
        dob,
        adress,
        email
    } = req.body

    const user = await User.findOne({ _id: userId })

    if (!user) {
        return res.status(400).send({
            errors: [
                'Usuário nâo encontrado'
            ]
        })
    }

    const previousContacts = user.contacts
    const newContact = {
        uuid: uuidv4(),
        name,
        surname,
        phone,
        dob,
        adress,
        email
    }

    previousContacts.push(newContact)

    await user.save()

    return res.status(201).send({ ...user._doc })
}

const getContact = async (req, res) => {
    const { userId, uuid } = req.body

    const user = await User.findOne({ _id: userId })

    if (!user) {
        return res.status(400).send({
            errors: [
                'Usuário nâo encontrado'
            ]
        })
    }

    const contacts = user.contacts

    let contact
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].uuid === uuid) {
            contact = contacts[i]
            console.log('contact: ', contact)
        }
    }
    

    return res.status(200).send({ ...contact })
}

const getContacts = async (req, res) => {
    const { userId } = req.body || null
    const user = await User.findOne({ _id: userId })

    if (!user) {
        return res.status(400).send({
            errors: [
                'Usuário nâo encontrado'
            ]
        })
    } else {
        return res.status(200).send([
            ...user.contacts
        ])
    }
}

module.exports = {
    getContacts,
    getContact,
    addContact,
    editContact,
    deleteContact
}