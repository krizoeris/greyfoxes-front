import React from 'react'
import img from '../img/product07.png'


const ProductCard = ({props}) => {
  return(
<div className="ProductCard">
    <div class="container"> <h3 class="text-center">Top Selling</h3>
<hr/>


<div class="row">

<div class="col-md-3">
	<figure class="card card-product">
		<div class="img-wrap"> 
			<img alt ="phone1" src="../img/product07.png" />
		</div>

		<figcaption class="info-wrap">
			<h6 class="title text-dots"><a href="https://www.techradar.com/uk/news/best-phone/5">Samsung S10</a></h6>
			<div class="action-wrap">
				<a href="https://www.techradar.com/uk/news/best-phone/5" class="btn btn-primary btn-sm float-right"> Order </a>
				<div class="price-wrap h5">
					<span class="price-new">AED1280</span>
					<del class="price-old">AED1900</del>
          </div> 
			</div>
		</figcaption>
	</figure> 
</div>


<div class="col-md-3">
	<figure class="card card-product">
		<div class="img-wrap">
     <img alt ="phone2" src="..src/img/product07.png"/>
		</div>

		<figcaption class="info-wrap">
			<h6 class="title text-dots"><a href="https://www.techradar.com/uk/news/best-phone/5">Huawei Mate 20</a></h6>
			<div class="action-wrap">
				<a href="https://www.techradar.com/uk/news/best-phone/5" class="btn btn-primary btn-sm float-right"> Order </a>
				<div class="price-wrap h5">
					<span class="price-new">AED1800</span>
          <del class="price-old">AED2200</del>
				</div> 
			</div>
		</figcaption>
	</figure>
</div>


<div class="col-md-3">
	<figure class="card card-product">
		<div class="img-wrap">
    <img alt ="phone3" src="./img/product07.png"/> 	
		</div>

		<figcaption class="info-wrap">
			<h6 class="title text-dots"><a href="https://www.techradar.com/uk/news/best-phone/5">Apple iPhone 11</a></h6>
			<div class="action-wrap">
				<a href="https://www.techradar.com/uk/news/best-phone/5" class="btn btn-primary btn-sm float-right"> Order </a>
				<div class="price-wrap h5">
					<span class="price-new">AED3500</span>
          <del class="price-old">AED4000</del>
				</div> 
			</div> 
		</figcaption>
	</figure>
</div> 

<div class="col-md-3">
	<figure class="card card-product">
		<div class="img-wrap">
     <img alt ="phone4" src="./img/product07.png"/>
		</div>
		<figcaption class="info-wrap">
			<h6 class="title text-dots"><a href="https://www.techradar.com/uk/news/best-phone/5">Apple iPhone XS</a></h6>
			<div class="action-wrap">
				<a href="https://www.techradar.com/uk/news/best-phone/5" class="btn btn-primary btn-sm float-right"> Order </a>
				<div class="price-wrap h5">
					<span class="price-new">$2800</span>
          <del class="price-old">AED3500</del>
				</div>
			</div> 
		</figcaption>
	</figure> 
</div> 

</div>
</div> 
</div>
)}
export default ProductCard;
