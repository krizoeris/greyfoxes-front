import React from 'react'

const Navbar = ({props}) => {
  return(
    <div className="nav">
      <nav id="navigation">
			<div class="container">

				<div id="responsive-nav">
					
					<ul class="main-nav nav navbar-nav">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">Hot Deals</a></li>
						<li><a href="#">Categories</a></li>
						<li><a href="#">Smartphones</a></li>
						<li><a href="#">Used Phones</a></li>
						<li><a href="#">Contact Us</a></li>
						<li><a href="#">About</a></li>
					</ul>
					
				</div>
				
			</div>
			
		</nav>

    </div>
  )
}

export default Navbar