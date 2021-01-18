function index(req, res) {
    res.json(req.user);
    // req.session.views = req.session.views ? req.session.views + 1 : 1;
    // res.json(req.session.views);
}
