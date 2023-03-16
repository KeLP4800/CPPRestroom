const Restroom = require('../models/restroom')
const assert = require('assert')

describe('Creating restroom in Mongodb', () => {
    it('Create a new restroom', (done) => {
        const restroom = new Restroom({ title: 'Restroom1', description: 'very nice', location: 'bldg 163' })
        restroom.save()
            .then(() => {
                assert(!restroom.isNew)
                done()
            })
    })
})