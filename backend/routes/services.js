// Make sure service is a soft delete (active to inactive)

const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { services } = require('../models/models')

// // GET 10 most recent services for org
// router.get('/', (req, res, next) => {
//   services
//     .find({ orgs: org }, (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         return res.json(data)
//       }
//     })
//     .sort({ updatedAt: -1 })
//     .limit(10)
// })

// Get ALL services
router.get('/', (req, res, next) => {
  services.find({ org: org }, (error, data) => {
    if (error) {
      return next(error)
    } else if (!data) {
      res.status(400).send('Service not found')
    } else {
      res.json(data)
    }
  })
})


// GET single service by ID
router.get('/id/:id', (req, res, next) => {
  // use findOne instead of find to not return array
  services.findOne({ _id: req.params.id, orgs: org }, (error, data) => {
    if (error) {
      return next(error)
    } else if (!data) {
      res.status(400).send('service not found')
    } else {
      res.json(data)
    }
  })
})

// GET entries based on search query
// Ex: ''
router.get('/search', (req, res, next) => {
  const services = { orgs: org }
  switch (req.query.searchBy) {
    case 'name':
      services.name = { $regex: `^${req.query.Service.name}`, $options: 'i' }
        break
    case 'status':
      services['Service.status'] = {
        $regex: `^${req.query['Service.status']}`,
      }
      break
    default:
      return res.status(400).send('invalid searchBy')
  }
  services.find(services, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// POST new service
router.post('/', (req, res, next) => {
  const newService = req.body
  newService.orgs = [org]
  services.create(newService, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// PUT update service
router.put('/update/:id', (req, res, next) => {
  services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// PUT add existing Service to org
// router.put('/register/:id', (req, res, next) => {
//   services.findByIdAndUpdate(
//     req.params.id,
//     { $push: { orgs: org } },
//     (error, data) => {
//       if (error) {
//         console.log(error)
//         return next(error)
//       } else {
//         res.send('Service registered with org')
//       }
//     }
//   )
// })

// PUT remove existing service from org
// router.put('/deregister/:id', (req, res, next) => {
//   services.findByIdAndUpdate(
//     req.params.id,
//     { $pull: { orgs: org } },
//     (error, data) => {
//       if (error) {
//         console.log(error)
//         return next(error)
//       } else {
//         res.send('Service deregistered with org')
//       }
//     }
//   )
// })

// soft DELETE service by ID, as per project specifications
router.delete('/:id', (req, res, next) => {
  // Update the service document to set the status to "inactive"
  services.findByIdAndUpdate(
    req.params.id,
    { status: 'inactive' },
    { new: true }, // Return the updated document
    (error, data) => {
      if (error) {
        return next(error);
      } else if (!data) {
        res.status(400).send('Service not found')
      } else {
        res.send('Service status set to inactive')
      }
    }
  )
})


module.exports = router

