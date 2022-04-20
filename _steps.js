/* 
***Basic Sever Setup
1. create a folder
2. open command line to that folder
3. npm init
4. npm install express
5. create index .js
---------------------
For Express for Server

1. require express
2. create app variable
3. declare port
4. set app.get('/')
5.listen to port
6. node index.js
7.check your browser for that  port
===========get=============
1. cors middleware  
2.app.use(express.json());
===========id search===========
1. console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
===========query search==========
1. req.query.(option)
2  const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
==============Post=================
1. req.body use korte hoi
2. console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);

*/
