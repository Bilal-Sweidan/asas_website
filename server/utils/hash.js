const bcryptjs = require('bcryptjs')

function hash(password){
    const salt = bcryptjs.genSaltSync()
    return bcryptjs.hashSync(password,salt)
}

function compare(raw,hashed){
    return bcryptjs.compareSync(raw,hashed)
}

module.exports = { hash , compare }