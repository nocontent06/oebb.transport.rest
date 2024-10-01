const docs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OEBB Transport REST API</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
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
        .api-info h2 {
            font-size: 2rem;
            font-weight: bold;
        }
        .api-info p {
            font-size: 1.25rem;
        }
        .api-info ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .api-info li {
            font-size: 1.25rem;
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">OEBB Transport</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/docs">API Documentation</a>
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
    <div class="container">
        <h1 class="mt-5">API Documentation</h1>
        <p class="lead">Here you can find the API documentation for OEBB Transport REST API.</p>
    </div>
    <div class="container">
        <div class="api-info">
            <h2>API Information</h2>
            <ul>
                <li><strong>Version:</strong> 1.0.0</li>
                <li><strong>Host:</strong> v6.oebb.transport.rest</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
export default docs
