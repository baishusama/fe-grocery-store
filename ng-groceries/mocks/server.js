const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const port = 3000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

// 针对 ^/progresses 做分页处理
router.render = (req, res) => {
  // req.locals.
  console.log('[test] Object.keys(req) :', Object.keys(req));
  console.log('[test] req.url :', req.url);
  const data = res.locals.data;
  if (req.method === 'GET' && /^\/progresses/.test(req.url)) {
    // TODO: 分页处理
    const newData = res.get('Link');
    console.log("[test] res.get('Link') :", newData);
    res.json(newData);
    // res.json({
    //   count: data.length,
    //   results: data
    // });
  } else {
    // TODO: 这里讲道理不是能不做处理的么？
    res.json(data);
  }
};

// Use default router
server.use(router);
server.listen(port, () => {
  console.log(`[test] JSON Server is running on port ${port}`);
});

// module.exports = () => {
//   const data = {
//     users: []
//   };
//   for (let i = 0; i < 100; i++) {
//     data.users.push({ id: i, name: `user${i}` });
//   }
//   return data;
// };
