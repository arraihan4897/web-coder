import Card from 'react-bootstrap/Card';

function Blog() {
  return (
    <>
    <div className='m-5 ' >
          <Card border="primary"style={{ width: '100' ,mb:'5', }}>
        <Card.Header> What is CORS ?</Card.Header>
        <Card.Body>
         
          <Card.Text>
         
            Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
           </Card.Text>
         </Card.Body>
      </Card>
      <br />

      <Card border="primary" style={{ width: '100' ,mb:'5' }}>
        <Card.Header>Why we use firebase?
            <br /> What other options do you have to implement authentication?</Card.Header>
        <Card.Body>
         
          <Card.Text>
         
          The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. <br />
          Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: '100' ,mb:'5' }}>
        <Card.Header>How does the private route work?</Card.Header>
        <Card.Body>
         
          <Card.Text>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="primary" style={{ width: '100' ,mb:'5' }}>
        <Card.Header>What is Node? How does Node work?</Card.Header>
        <Card.Body>
         
          <Card.Text>
         
          Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  
   </>
  );
}

export default Blog;