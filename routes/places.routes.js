const router = require("express").Router();
const Place = require("../models/Place.model");

//CREAR UN PLACE

router.get("/new-place", (req, res, next) => {
    res.render('places/new-place')
})

router.post("/new-place", (req, res, next) => {

    const { name, type } = req.body;

    Place.create({ name, type })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

//MOSTAR TODOS LOS PLACES
router.get("/all-places", (req, res, next) => {
    Place.find()
        .then((allPlaces) => res.render("places/all-places", { allPlaces }))
        .catch(err => console.log(err))
})



//EDITAR UN PLACE
router.get('/edit-place', (req, res, next) => {
    res.render('places/edit-place')
})

router.post('/edit-place/:place_id', (req, res, next) => {

    const { name, type } = req.body;

    Place.findById(id)
        .then(place => res.render('edit-place', place))
        .catch(err => console.log(err))
})

router.post('/edit-place/:place_id', (req, res, next) => {
    const { id } = req.params

    const { name, type } = req.body;

    Place.findByIdAndUpdate(id, { name, type })
        .then(updatePlace => res.redirect('/', updatePlace))
        .catch(err => console.log(err))
})

module.exports = router