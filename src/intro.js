// create HTML page
const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>oebb.transport.rest - OEBB REST API</title>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f8f9fa;
            }
            .navbar {
                margin-bottom: 2rem;
            }
            .hero-section {
                background: linear-gradient(to right, #007bff, #6610f2);
                color: white;
                padding: 5rem 2rem;
                text-align: center;
            }
            .hero-section h1 {
                font-size: 3rem;
                font-weight: bold;
            }
            .hero-section p {
                font-size: 1.25rem;
            }
            .api-info {
                padding: 2rem 0;
            }
            .footer {
                background-color: #343a40;
                color: white;
                padding: 1rem 0;
                text-align: center;
            }
        </style>
    </head>
    <body>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">OEBB Transport</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/docs">API Documentation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/nocontent06/oebb.transport.rest">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="mailto:admin@macistry.com">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="hero-section">
            <h1>OEBB Transport REST API</h1>
            <p>The modern way to interact with OEBB services</p>
            <a href="/docs" class="btn btn-light btn-lg mt-3">Get Started</a>
        </div>

        <!-- API Information Section -->
        <div class="container api-info text-center">
            <h2 class="mt-5">Why OEBB Transport API?</h2>
            <p class="lead">Our API offers real-time data about Austrian train services. Get updates on train routes, schedules, and more!</p>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Real-Time Updates</h5>
                            <p class="card-text">Stay up to date with real-time train schedules and journey data for Austrian railway services.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Easy Integration</h5>
                            <p class="card-text">Seamlessly integrate the OEBB Transport API into your application for smooth transportation data integration.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Reliable Data</h5>
                            <p class="card-text">Access reliable and accurate data from OEBB’s services, ensuring the best experience for your users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <span>&copy; 2024 OEBB Transport REST API | All Rights Reserved</span>
            </div>
        </footer>

        <!-- Bootstrap JS and Popper.js -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>
`;


export default html