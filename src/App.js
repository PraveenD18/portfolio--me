import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import Album from "./Album";
import MouseParticles from 'react-mouse-particles';
import praveenImg from './praveenimg.jpg';
import product from './product.jpg';
import career from './career.jpg';
import sent from './sent_an.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='body'>
        <MouseParticles
        g={2.3}
        num={1}
        radius={8}
        life={0.8}
        v={1.2}
        color="random"
        alpha={0.16}
        level={6}
      />
        <div className="port-container">
            <h1 className='headi'>My Portfolio</h1>
            
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <div className="nav-links">
                <h6 style={{color:'white',fontFamily:'sans-serif'}}><a href="#about">ABOUT</a></h6>
                <h6 style={{color:'white',fontFamily:'sans-serif'}}><a href="#projects">PROJECT</a></h6>
                <h6 style={{color:'white',fontFamily:'sans-serif'}}><a href="#contact">CONTACT</a></h6>
            </div>
        </div>
        
        <div class="hello-container">
            <div className='row align-items'>
            <div className='col-md-6 text-center'>
                <h1 className="display-4">Hello, I'm PRAVEEN </h1>
                <p className="lead">A passionate developer creating awesome websites and applications.</p>
                <a href="#contact" className="btn btn-light btn-lg">Get in Touch</a>
            </div>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <div class="col-md-4">
            <div className="icons">
            <a href="https://leetcode.com/u/dpraveen18/">
                <div className="layer">
                    <span className="fab fa-code"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="text">Leetcode</div>
            </a><a href="https://github.com/PraveenD18">
                <div className="layer">
                    <span className="fab fa-github"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="text">Github</div>
            </a>
            <a href="https://www.linkedin.com/in/praveen-d-a10588288">
                <div className="layer">
                    <span className="fab fa-linkedin-in"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="text">Linked-In</div>
            </a>
            <a href="#">
                <div className="layer">
                    <span className="fab fa-instagram"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="text">Insta</div>
            </a>
        </div>    
        </div>   
        </div>
        </div>
        <div className='rhr'><hr /></div>
        <section id="about" className="pic-container">
            <div className="row align-items-center">
            &emsp;&emsp;&emsp;&emsp;
                <div className="col-md-4 text-center">
                    <img src={praveenImg} alt="Your Photo" className="img-fluid" style={{ maxWidth: '100%', height: 'auto',borderRadius: '5%',padding:'20PX'}} />
                </div>&emsp;&emsp;&emsp;&emsp;
                <div className="col-md-5" style={{boxShadow:'-1px 4px 8px 4px #3f3f3f',top:'5',padding:'25px'}}>
                    <div>
                        <br></br>
                        <h2 style={{fontFamily:'san-serif'}}>About me</h2><br></br>
                        <p style={{fontFamily:'cursive'}}>I am a passionate Machine Learning Engineer with a robust foundation in data analysis and predictive modeling. My expertise extends to utilizing Python and TensorFlow to develop advanced AI solutions that push the boundaries of technology. Beyond creating algorithms, I thrive on implementing these models into scalable systems that address real-world challenges effectively.In addition to my AI proficiency, I excel in building responsive web applications using React.js. My background in front-end development allows me to craft intuitive user interfaces that enhance user experience and streamline interaction with complex systems powered by AI.</p>

                    </div>
                </div>

            </div>
        </section>  
        <div className='hello-container'>
        <section id="skills" className="skills-container" style={{backgroundColor:'#adadad'}}>
            <br></br>
            <h2 className="text-center" style={{color:'black',fontFamily:'sans-serif'}}>Skills</h2>
            <div className='rhr'><hr/></div>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="skill-item">
                        <i className="fas fa-code fa-3x"></i>
                        <h4>Web Development</h4>
                        <p>HTML, CSS, JavaScript, React.js</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skill-item">
                        <i className="fas fa-database fa-3x"></i>
                        <h4>Data Analysis</h4>
                        <p>Python, Pandas, NumPy</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="skill-item">
                        <i className="fas fa-robot fa-3x"></i>
                        <h4>Machine Learning</h4>
                        <p>TensorFlow, Scikit-learn</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <section id="projects" className="project-container">
        <h2 className="text-center" style={{color:'white',fontFamily:'san-serif'}}>PROJECTS</h2>
        <div className='rhr'><hr/></div>
                <div className="row">
                    <div className="col-md-4">
                        <br></br>
                        <div className="card mb-4 shadow-sm">
                            <img src={career} className="card-img-top" alt="Project 1"/>
                        <div className="card-body">
                            <h5 className="card-title" style={{fontFamily:'sans-serif'}}>Career chooser</h5>
                            <p className="card-text">Career Chooser helps the students to acknowledge their career path on their own using this application</p>
                            <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <br></br>
                    <div className="card mb-4 shadow-sm">
                        <img src={product} className="card-img-top" alt="Project 2"/>
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'sans-serif'}}>Product Recommendation System</h5>
                                <p className="card-text">Recommending products to the users according to the reviews given by other users</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                        </div>
                    </div>
                <div className="col-md-4">
                <br></br>
                    <div className="card mb-4 shadow-sm">
                        <img src={sent} className="card-img-top" alt="Project 3"/>
                            <div className="card-body">
                                <h5 className="card-title" style={{fontFamily:'sans-serif'}}>Sentimental analysis</h5>
                                <p className="card-text">Brief description of your project. What technologies did you use? What problem does it solve?</p>
                                <a href="#" className="btn btn-primary">View Project</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='rhr'><hr /></div>
        <section id="contact">
            <div className="cont-container">
                <h2 style={{color:'black',fontFamily:'sans-serif'}}>Contact me</h2>
                <p style={{ color:'black' }}>Feel free to reach out if you want to work together or have any questions!</p>
                <form className="mt-4">
                    <div className="form-row">
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" placeholder="Your Name" required/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Your Message" style={{ width: '710px' }}  required></textarea>
                    </div>
                    <br></br>
                    <br></br>
                    <button type="submit" className="btn btn-primary" style={{ color:'white' }}>Send Message</button>
                </form>
            </div>
        </section>
        <div className='rhr'><hr /></div>
        <footer className="bg-dark text-white text-center py-3">
            <p>&copy; 2024 PraveenD18. All rights reserved.</p>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
