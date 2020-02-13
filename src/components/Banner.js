import React from 'react'

const Banner = () => {
  return(
    <div className="banner">

{/* <!-- HOT DEAL SECTION --> */}
		<div id="hot-deal" class="section">
			{/* <!-- container --> */}
			<div class="container">
				{/* <!-- row --> */}
				<div class="row">
					<div class="col-md-12">
						<div class="hot-deal">
							<ul class="hot-deal-countdown">
								<li>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-banner-h1">hot deal this week</h2>
							<p className="text-banner-p">New Collection Up to 50% OFF</p>
							<a className="primary-btn cta-btn" href="https://www.techradar.com/uk/news/best-phone/5">Shop now</a>
						</div>
					</div>
				</div>
				{/* <!-- /row --> */}
			</div>
			{/* <!-- /container --> */}
		</div>

    </div>
  )
}

export default Banner