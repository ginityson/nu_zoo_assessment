Gini - Things are coming together. You have a lot of the pieces here.
The server code is especially clean, well documented, and easy to read.
The client side script could use some formatting and clean up to help
you (and others) read it more easily.

My overall feedback is connection points.
Most of the code is there, but the connection between the
backend and frontend is missing as well as some
client side javascript functions that trigger
the main functionality are not getting called at all.

  In your server code your post route is almost there.
X You missed the res.send() or any kind.
  With out a response from the server the client will hang waiting for a response. 

X There seems to be an issue with body parser getting the data/payload/body off the request.
  I looked into it a bit, but couldn’t quite debug it. We can look at it more together.

Your database connection string is built well and I was able to easily wire up your code
to my database.

X A “get animals” route is missing.

This is the route that would select
the animals from the database and once passed to the client side,
they would be displayed on the dom.
Your client side code to appends them to the DOM is perfect

X and once I added a get route it worked well.

  Your client side code is organized into functions,
X but the functions are never called.

X If you look at your submit button click, you will see that there is only a console log,

X so even though most of the code in these functions is correct,

X the use cannot trigger this functionality because the functions are not called.

You have a good foundation here. I hope the live solve helped a bit.
I encourage you to take this code and work it until complete.
Get help from Dev, Casie, and I as well as your classmates.
