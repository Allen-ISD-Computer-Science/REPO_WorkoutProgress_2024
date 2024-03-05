import Vapor
import Fluent
import FluentMySQLDriver
import Crypto


func routes(_ app: Application) throws {

    func renderIndex(_ request: Request) async throws ->  View {
        return try await request.view.render("index.html")
    }

    app.get("") {req in
        req.redirect(to: "./welcome")
    }

    app.get("welcome") { req in
        return try await renderIndex(req)
    }

    app.get("workouts") { req in
        return try await renderIndex(req)
    }
    
    app.get("diets") { req in
        return try await renderIndex(req)
    }
    
    app.get("about_us") { req in
        return try await renderIndex(req)
    }

    app.get("equipment") {req in
        return try await renderIndex(req)
    }

    app.get("quotes") {req in
        return try await renderIndex(req)
    }

    app.get("supplements") {req in
        return try await renderIndex(req)
    }


    // request url ...workouts/beginner, must use comma for such pages
    app.get("workouts", "beginner") {req in
        return try await renderIndex(req)
    }
    app.get("workouts", "advanced") {req in
        return try await renderIndex(req)
    }
    app.get("diets", "beginner") {req in
        return try await renderIndex(req)
    }
    app.get("diets", "intermediate") {req in
        return try await renderIndex(req)
    }
    app.get("diets", "advanced") {req in
        return try await renderIndex(req)
    }       
    app.get("workouts", "intermediate") {req in
        return try await renderIndex(req)
    }


    
    /// START CORE SITE ENDPOINTS
    
    // Create protected route group which requires user auth. We will need this comment section
    let sessions = app.grouped([User.sessionAuthenticator(), User.credentialsAuthenticator()])
    let protected = sessions.grouped(User.redirectMiddleware(path: "./signin"))

    protected.get("index") { req in
        return try await renderIndex(req)
    }
}
/*
    protected.get("") { req in
        return try await renderIndex(req)
    }

    protected.get("") { req in
        return try await renderIndex(req)
    }
*/  

  
/*
protected.get("logout") { req in
    req.auth.logout(User.self)
    return req.redirect(to: "./signin")
}*/


/// END CORE SITE ENDPOINTS
// this is an example    try app.register(collection: LoginController())




struct CustomError: Content {
    let error: String
}

/*
 struct Contact: Content {
 let firstName: String
 let lastName: String
 let emailAddress: String
 }

 struct EmailData: Content {
 let contact: Contact
 let templateName: String
 let templateParameters: String
 }
 */
