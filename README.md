Example:

```js
import express from "express"

import { Controller } from "controller-express"

const AppController = Controller({
    "GET /"(req, res) {
        res.send("home")
    },
    "GET /user/:id"(req, res) {
        res.send({
            id: req.params.id
        })
    },
    "POST /"(req, res) {
        res.send("only post allowed")
    }
})

const app = express()

app.use(AppController)

app.start(8000)
```