import { Height } from '@mui/icons-material'
import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import ResumeImage1 from '../assets/resume-image.png'
import ResumeImage2 from '../assets/office-bg.jpg'

function Landingpage() {
  
  const backgroundProps1={
    backgroundImage:"url('https://www.bbvapivot.com/wp-content/uploads/2021/05/portada-reporting.jpg')",
    // backgroundImage:"url('https://www.lrostaffing.com/wp-content/uploads/2024/03/Optimizing-Your-Resume-for-Applicant-Tracking-Systems-lrostaffing.jpg')",
    height:'90vh',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
  }

  const backgroundProps2={
    backgroundImage:`url(${ResumeImage2})`,
    height:'95vh',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundAttachment:'fixed'
  }

  return (
   <>
   <div className='container-fluid d-flex justify-content-center align-items-center' style={backgroundProps1}>
    <div className='border border-3 w-50 shadow rounded p-3 text-center' style={{backgroundColor:'rgba(224, 217, 217, 0.25)'}}>
      <h2>Build Your Resume</h2>
      <h4>Your Skills,Your Story,Your Next Job All in One</h4>
      <Link to={'/instructions'} className='btn btn-info'>Make Your Resume</Link>
    </div>
   </div>

   <div className='container-fluid p-5'>
    <h2 className='text-center mb-3'>Tools</h2>
    <Row>
      <Col sm={12} md={6}>
      <h3>Resume</h3>
      <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iusto! Nulla nesciunt maxime magnam. Autem earum consequuntur dicta numquam iure perferendis magni repellat voluptatem officia, quisquam fuga voluptas consectetur placeat.</p>
      
      <h3 className='mt-2'>Cover Letter</h3>
      <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore veniam ex odit ipsam. Pariatur facilis fugiat quo recusandae corporis dicta exercitationem aliquam omnis fugit debitis. Quia sit animi id?</p>
      
      <h3 className='mt-2'>Jobs</h3>
      <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore veniam ex odit ipsam. Pariatur facilis fugiat quo recusandae corporis dicta exercitationem aliquam omnis fugit debitis. Quia sit animi id?</p>
      
      <h3 className='mt-2'>Application</h3>
      <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam labore veniam ex odit ipsam. Pariatur facilis fugiat quo recusandae corporis dicta exercitationem aliquam omnis fugit debitis. Quia sit animi id?</p>
      </Col>

      <Col sm={12} md={6} className='d-flex justify-content-center'>
      <img src={ResumeImage1} alt="Resume Image" width={'80%'} />
      </Col>
    </Row>
    </div>

    <div className='container-fluid' src={ResumeImage2} style={backgroundProps2} >
    </div>

    <div className='container-fluid px-5'>
      <h2 className='text-center mb-4 mt-5'>Testimony</h2>
      <Row className='my-3 mt-5'>
        <Col sm={12} md={6}>
        <h4>Trusted by Proffesionals World Wide</h4>

        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore molestiae cumque laudantium perferendis sequi recusandae vero minima quaerat facilis neque delectus aliquam, obcaecati officiis, doloribus commodi maxime animi eaque corporis!
        </p>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore molestiae cumque laudantium perferendis sequi recusandae vero minima quaerat facilis neque delectus aliquam, obcaecati officiis, doloribus commodi maxime animi eaque corporis!. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam optio illo vero eligendi obcaecati sapiente cupiditate eos? Tempora harum blanditiis voluptatum dolore ea esse, voluptas illo, laborum libero dicta dolorum.
        </p>
        <p style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore molestiae cumque laudantium perferendis sequi recusandae vero minima quaerat facilis neque delectus aliquam, obcaecati officiis, doloribus commodi maxime animi eaque corporis!
        </p>
        </Col>

        <Col sm={12} md={6} className='d-flex justify-content-center'>
        <img src="https://st2.depositphotos.com/1017986/7171/i/450/depositphotos_71716095-stock-photo-group-of-smiling-businessmen-showing.jpg" alt="Testimony" height={'80%'} width={'80%'}/>
        </Col>
      </Row>
    </div>
   </>
  )
}

export default Landingpage