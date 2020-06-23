const express = require('express')
const router = express.Router()

//post model
const Posts = require('../../models/Post')
const Post = require('../../models/Post')

//routes GET api/posts
//desc get all posts
router.get('/', async (req,res) => {
    try {
        const posts = await Posts.find()
        if(!posts) throw Error("No items found")
        res.status(200),json(posts)
    } catch(err) {
        res.status(400).json({msg: err})
    }
})

//routes GET api/posts/:id
//desc get all posts
router.get('/', async (req,res) => {
    try {
        const posts = await Posts.findById(req.params.id)
        if(!posts) throw Error("No post found")
        res.status(200),json(posts)
    } catch(err) {
        res.status(400).json({msg: err})
    }
})

//routes POST api/posts
//desc create a specific post
router.post('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id)
        if(!post) throw Error('No post found')
        res.status(200).json({ success: true })
    } catch(err) {
        res.status(400).json({msg: err})
    }
})


//routes DELETE api/posts:id
//desc delete posts
router.delete('/', async (req,res) => {
    try {
        const posts = await Posts.find()
        if(!posts) throw Error("No items found")
        res.status(200),json(posts)
    } catch(err) {
        res.status(400).json({msg: err})
    }
})

//routes UPDATE api/posts:id
//desc update posts
router.patch('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body)
        if(!post) throw Error("Post did not update")

        res.status(200).json({ success: true })
    } catch(err) {
        res.status(400).json({msg: err})
    }
})

module.exports = router