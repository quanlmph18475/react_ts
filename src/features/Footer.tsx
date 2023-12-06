import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
	<>
		<div className="px-12 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
				<div className="col-xs-12 col-md-6 col-xl-4 space-x-12  footer-click footer-1">

						<h4 className="text-l font-bold ... px-8">
							CÔNG TY TNHH GARNIER VIỆT NAM 
						</h4>
						
						<a href="/" className="logo-wrapper mb-3 d-block ">	
							<img src="../../../src/assets/image/avt.png" alt="logo Sukin - Mỹ phẩm thiên nhiên số 1 tại Úc" width="300" height="64"/>
						</a>
						
						<p>
							Cung cấp sản phẩm chất lượng từ các thương hiệu hàng đầu.
						</p>
						<div className="single-contact">
							<i className="fa fa-map-marker-alt"></i>
							<div className="content">Địa chỉ:
								<span>110 Nguyễn Chính, Thịnh Liệt, Hoàng Mai, Hà Nội </span>
								
							</div>
						</div>
						<div className="single-contact">
							<i className="fa fa-mobile-alt"></i>
							<div className="content">
								Số điện thoại: <a className="link" title="0948721615" href="tel:0948721615">0948721615</a>
							</div>
						</div>
						<div className="single-contact">
							<i className="fa fa-envelope"></i>
							<div className="content">
								Email: <a title="Sukinvietnamofficial@gmail.com " className="link" href="mailto:Sukinvietnamofficial@gmail.com ">Sukinvietnamofficial@gmail.com </a>
							</div>
						</div>
						<div className="social-footer">
							<h4 className="title-menu">Theo dõi chúng tôi</h4>
							<ul className="flex mt-4 space-x-6 md:mt-0" >	
								
								<li>
									<a className="facebook link" href="https://www.facebook.com/sukinvietnamofficial" target="_blank" title="Theo dõi Facebook Sukin - Mỹ phẩm thiên nhiên số 1 tại Úc">
										<img src="//theme.hstatic.net/1000182851/1000807154/14/facebook.svg?v=333" width="24" height="24" alt="facebook"/>	
									
									</a>
								</li>
								
															
								<li>
									<a className="zalo link" href="https://zalo.me/0948721615" target="_blank" title="Theo dõi zalo Sukin - Mỹ phẩm thiên nhiên số 1 tại Úc">
										<img src="//theme.hstatic.net/1000182851/1000807154/14/zalo.svg?v=333" width="24" height="24" alt="zalo"/>	
									
									</a>
								</li>
								
								
								<li>
									<a className="instgram link" href="#" target="_blank" title="Theo dõi instgram Sukin - Mỹ phẩm thiên nhiên số 1 tại Úc">
									<img src="//theme.hstatic.net/1000182851/1000807154/14/instagram.svg?v=333" width="24" height="24" alt="instgram"/>	
									</a>
								</li>
								
							</ul>
						</div>
				</div>
				<div className="flex mt-12 space-x-12">
					<div className="col-xs-12 col-md-6 col-xl-2 footer-click">
						<h4 className="text-l font-bold ... py-2">
							Chính sách <i className="fa fa-angle-down d-md-none d-inline-block"></i>
						</h4>
						<ul className="list-menu toggle-mn">
							
							<li className="li_menu">
								<a className="link" href="https://sukivn.com/pages/huong-dan-dat-hang-qua-website-sukinvn-com" title="Đặt Hàng &amp; Thanh Toán">Về chúng tôi</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-md-6 col-xl-2 footer-click">
						<h4 className="text-l font-bold ... py-2">
							Hỗ trợ khách hàng <i className="fa fa-angle-down d-md-none d-inline-block"></i>
						</h4>
						<ul className="list-menu toggle-mn">
							
							<li className="li_menu">
								<a className="link" href="https://sukivn.com/pages/huong-dan-dat-hang-qua-website-sukinvn-com" title="Đặt Hàng &amp; Thanh Toán">Đặt Hàng &amp; Thanh Toán</a>
							</li>
							
							<li className="li_menu">
								<a className="link" href="https://sukivn.com/blogs/dich-vu-ho-tro/bao-hanh-doi-tra" title="Bảo hành đổi trả">Bảo hành đổi trả</a>
							</li>
							
							<li className="li_menu">
								<a className="link" href="https://sukivn.com/blogs/dich-vu-ho-tro/chinh-sach-bao-mat-thong-tin-khach-hang" title="Chính sách bảo mật thông tin khách hàng">Chính sách bảo mật thông tin khách hàng</a>
							</li>
							
							<li className="li_menu">
								<a className="link" href="https://sukivn.com/blogs/dich-vu-ho-tro/phuong-thuc-thanh-toan" title="Phương thức thanh toán">Phương thức thanh toán</a>
							</li>
							
							<li className="li_menu">
								<a className="link" href="/search" title="Vị trí cửa hàng">Vị trí cửa hàng</a>
							</li>
							
						</ul>
					</div>
					<div className="col-xs-12 col-md-6 col-xl-4 footer-click">
											<h2 className="text-l font-bold ... py-2">Đăng ký nhận tin</h2>
						<div className="form_register ">
								
								<Input name="form_type" type="hidden" value="customer"/>
								<Input name="utf8" type="hidden" value="✓"/>
							<div className="custom-input-group mb-3 form_newsletter form_newsletter_customer"> 						
								<div className="input-group">
									<Input type="hidden" id="newsletter-tags" name="contact[tags]" value="khách hàng tiềm năng, bản tin"/>     
									<Input className="form-control input-group-field" aria-label="Địa chỉ Email" type="email" placeholder="Nhập địa chỉ email" id="newsletter-email" name="contact[email]" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
								<div className="input-group-btn btn-action py-2">
									<Button variant="destructive" type="submit" aria-label="Đăng ký nhận tin" name="subscribe">Đăng ký</Button>
								</div>
								</div>
							</div>							
								<div className="sitebox-recaptcha hidden">
									This site is protected by reCAPTCHA and the Google
									<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> 
									and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
								</div>	
								</div>                
								<span className="text-l font-bold ... py-2">
								Phương thức thanh toán 
								</span>
									<div className="product-trustbadge my-3">
								<a href="/collections/all" target="_blank" title="Phương thức thanh toán">
									<img className=" img-fluid" src="//theme.hstatic.net/1000182851/1000807154/14/footer_trustbadge.jpg?v=333" alt="Phương thức thanh toán" width="245" height="53"/>
								</a>
											</div>
																<a target="_blank" href="http://online.gov.vn/Home/WebDetails/49044?AspxAutoDetectCookieSupport=1" title="Logo bộ công thương">
							<img src="//theme.hstatic.net/1000182851/1000807154/14/logo_bct.png?v=333" width="200" height="76" alt="Logo bộ công thương"/>
						</a>
										</div>

					{/* <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
						<span className="sr-only">GitHub account</span>
					</a>
					<a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
						<span className="sr-only">Dribbble account</span>
					</a> */}
				</div>
		</div>
	</>
    
  )
}


export default Footer