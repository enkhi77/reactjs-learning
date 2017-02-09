"use strict";

var React = require('react'); //Import React using common.js pattern
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
   render: function() {
       return (
           <div className="jumbotron">
               <h1>PluralSight Administration</h1>
               <p>React, React Router, and Flux for ultra-responsive web apps.</p>
               <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
           </div>
       );
   }
});

module.exports = Home;