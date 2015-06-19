
SimpleSchema.messages({
    "passwordMismatch": "Passwords do not match"
});



Template['authInput'].helpers({
    errorClass : function(submitted, errorMessage) {
        return (submitted && errorMessage) ? 'has-error' : '';
    }

});

Template['authFormBlock'].helpers({
    isSignin : function() {
        return this.type.toUpperCase() === 'SIGNIN';

    }
});

Template['signinform'].helpers({
    schema: function () {
        return new SimpleSchema({
            email: {
                type: String,
                label:'Email',
                regEx: SimpleSchema.RegEx.Email,
                instructions: "Valid email is required"

            },
            password: {
                type: String,
                label: 'Password',
                min: 6,
                instructions: "Password of at least 6 chars"

            }
        });
    },
    action: function () {
        return function (els, callbacks, changed) {
            console.log("[forms] Action running!");
            console.log("[forms] Form data!", this);
            console.log("[forms] HTML elements with `.reactive-element` class!", els);
            console.log("[forms] Callbacks!", callbacks);
            console.log("[forms] Changed fields!", changed);

            Meteor.loginWithPassword(this.email, this.password, function(err) {
                if (err) {
                    // The user might not have been found, or their passwword
                    // could be incorrect. Inform the user that their
                    // login attempt has failed.
                    console.log("login with password failed");
                    callbacks.failed(); // Display error message.
                } else {
                    // The user has been logged in.
                    console.log("login with password success");
                    callbacks.success(); // Display success message.
                    callbacks.reset();
                    FlowRouter.go('/dashboard');
                }

            });
            // Run each Element's custom `reset` function to clear the form.
        };
    }
});

Template['signinform'].events({
    'click #signup' : function(e, t) {
        e.preventDefault();
        FlowRouter.go('/signup');
    }
});

Template['signupform'].helpers({
    schema: function () {
        return new SimpleSchema({
            email: {
                type: String,
                label:'Email',
                regEx: SimpleSchema.RegEx.Email,
                instructions: "Valid email is required"

            },
            password: {
                type: String,
                label: 'Password',
                min: 6,
                instructions: "Password of at least 6 chars"

            },
            confirmpswd: {
                type: String,
                label: 'Confirm password',
                min: 6,
                instructions: "Password of at least 6 chars",
            }
        });
    },
    action: function () {
        return function (els, callbacks, changed) {
            console.log("[forms] Action running!");
            console.log("[forms] Form data!", this);
            console.log("[forms] HTML elements with `.reactive-element` class!", els);
            console.log("[forms] Callbacks!", callbacks);
            console.log("[forms] Changed fields!", changed);

            Accounts.createUser({ email: this.email, password: this.password}, function(err) {
                if (err) {
                    // The user might not have been found, or their passwword
                    // could be incorrect. Inform the user that their
                    // login attempt has failed.
                    console.log("sign up with password failed");
                    callbacks.failed(); // Display error message.
                } else {
                    // The user has been logged in.
                    console.log("signup with password success");
                    callbacks.success(); // Display success message.
                    callbacks.reset();
                    FlowRouter.go('/signin');
                }

            });
            // Run each Element's custom `reset` function to clear the form.
        };
    }
});

Template['signupform'].events({
    'click #signin' : function(e, t) {
        e.preventDefault();
        console.log("signin");
        //FlowLayout.render('layout-unauth', { content: "signin"});
        FlowRouter.go('/signin');
    }
});

Template['authFormBlock'].events({
    'click #help' : function(e, t) {
        e.preventDefault();
        console.log("help");

        //FlowLayout.render('layout-unauth', { content: "help-" + this.type });

    },
    'click .social-google' : function(e, t) {
        e.preventDefault();

        return Meteor.loginWithGoogle({
            requestPermissions: ['email']
        }, function(error) {
            if (error) {
                console.log('google login error');
                return console.log(error.reason);
            } else {
                console.log('google login success');
                //FlowLayout.render('layout-auth', { content: "app" });
                FlowRouter.go('/dashboard');
            }
        });

    },
    'click .social-facebook' : function(e, t) {
        e.preventDefault();
        return Meteor.loginWithFacebook({
            requestPermissions: ['email']
        }, function(error) {
            if (error) {
                console.log('facebook login error');
                return console.log(error.reason);
            } else {
                console.log('facebook login success');
                //FlowLayout.render('layout-auth', { content: "app" });
                FlowRouter.go('/dashboard');
            }
        });

    },
    'click .social-twitter' : function(e, t) {
        e.preventDefault();
        return Meteor.loginWithTwitter({
            requestPermissions: ['email']
        }, function(error) {
            if (error) {
                return console.log(error.reason);
            } else {
                FlowRouter.go('/dashboard');
            }
        });
    }
});


Template['help-signin'].events({
    'click #back' : function(e, t) {
        e.preventDefault();
        FlowRouter.go('/signin');
    }
});

Template['help-signup'].events({
    'click #back' : function(e, t) {
        e.preventDefault();
        FlowRouter.go('/signup');
    }
});

Template['app'].events({
    'click #logout' : function(e, t) {
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/signin');
    }
});

ReactiveForms.createFormBlock({
    template: 'authFormBlock',
    submitType: 'normal'
});

ReactiveForms.createElement({
    template: 'authInput',
    validationEvent: 'keyup',
    reset: function (el) {
        $(el).val('');
    }
});

