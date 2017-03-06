import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var IronYardPage = React.createClass({
	render: function()
	{
		return(
			<div id="outter-div">
				<Header />
				<Main />
			</div>
			)
	}
})

var Header = React.createClass({
	render: function(){
			return(
				<div id="header">
					<img id="skyline" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
	  				<img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
				</div>
				)
		}
})

var Main = React.createClass({
	render: function(){
		return(
			<div id="main">
				<Left />
				<Right />
				<Fix />
			</div>
			)
	}
})

var Left = React.createClass({
	render: function(){
		return(
			<div id="left">
				<h3>THE IRON YARD | HOUSTON</h3>
	    		<h4 id="happen">Happenings and updates from the Iron Yard in Houston, TX</h4>
	    		<h4 id="search">SEARCH</h4>
	    		<p id="keyword">Search Keywords</p>
			</div>
			)
	}
})

var Right = React.createClass({
	render: function(){
		return(
			<div id="right">
				<h1>September 22 Starts a New Class of The Iron Yard Studends</h1>
	    		<p id="brian">By Brian Dorton, Campus Director at <a href="https://www.theironyard.com/">The Iron Yard</a> Houston</p>
	   			<img id="classroom" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" alt="classroom" />
	    		<p id="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ipsum, repellat illum, quo iste, blanditiis hic velit impedit sit praesentium voluptate amet nemo sapiente, aliquid! In, possimus ipsa excepturi tempore.</p>
			</div>
			)
	}
})

var Fix = React.createClass({
	render: function(){
		return(
			<div id="fix">
				<Top />
				<Bottom />
			</div>
			)
	}
})

var Top = React.createClass({
	render: function(){
		return(
			<div id="top">
				<p>Never Miss a Post!</p>
			</div>
		)
	}
})

var Bottom = React.createClass({
	render: function(){
		return(
			<div id="bottom">
				<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
				<Bottommiddle />
				<Bottomright />
			</div>
		)
	}
})

var Bottommiddle = React.createClass({
	render: function(){
		return(
			<div id="bottom_middle">
				<p>tiyhouston</p>
				<p>The Iron Yard | Houston</p>
	    	</div>
		)
	}
})

var Bottomright = React.createClass({
	render: function(){
		return(
			<div id="bottom_right">
				<p id="follow">+ Follow</p>
	    	</div>
	    )
	}
})

var app = function(){
	var libraryName = 'react'
	ReactDOM.render(<IronYardPage />, document.querySelector('.container'))
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..