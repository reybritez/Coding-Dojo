const Authors = require("../models/authors.models")

module.exports.createAuthors = (req, res) => {
    Authors.create(req.body)
        .then(newAuthors => res.json({ result: newAuthors }))
        .catch(error => res.status(400).json({ message: "Algo salió mal Create", error: error }))
};

module.exports.allAuthors = (req, res) => {
    Authors.find()
        .then(allAuthors => res.json({ result: allAuthors }))
        .catch(error => res.json({ message: "Algo salió mal All", error: error }))
};

module.exports.oneAuthors = (req, res) => {
    Authors.findById(req.params.id)
        .then(viewAuthors => res.json({ result: viewAuthors }))
        .catch(error => res.json({ message: "Algo salió mal One", error: error }))
};

module.exports.updateAuthors = (req, res) => {
    Authors.updateOne({ _id: req.params.id }, req.body, {runValidators:true})
        .then(update => res.json({ result: update }))
        .catch(error => res.status(400).json({ message: "Algo salió mal Update", error: error }))
};

module.exports.deleteAuthors = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(error => res.json({ message: "Algo salió mal Delete", error: error }))
};