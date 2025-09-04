var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec51-ApproximatingArea",
  "level": "1",
  "url": "sec51-ApproximatingArea.html",
  "type": "Section",
  "number": "5.1",
  "title": "Approximating and Computing Area",
  "body": " Approximating and Computing Area  Text of section.  "
},
{
  "id": "sec52-DefiniteIntegral",
  "level": "1",
  "url": "sec52-DefiniteIntegral.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Definite Integral",
  "body": " The Definite Integral  Text of section.  "
},
{
  "id": "sec53-IndefiniteIntegral",
  "level": "1",
  "url": "sec53-IndefiniteIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Indefinite Integral",
  "body": " The Indefinite Integral   In this section, you will learn a concept called \"antiderivative\".    After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.        Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.       What function will give a derivative of ?    Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?     We can consider taking the derivative as an operation we can perform on a function. A natural question to wonder is whether we can undo this operation (that is, we know the derivative of a function and we want to find the original function by undoing the derivative). We actually can and this is the main concept we will explore in this section.   Antiderivatives and Indefinite Integrals  Let's define the term antiderivative first (it might be self-explanatory...).    A function is an antiderivative of on an open interval if for all in .    In other words, antiderivative \"undoes\" derivative. Let be a function and be its antiderivative, then its relation is captured in the following diagram:   Insert the diagram here    Find an antiderivative of the function    What we are asked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...     Observe that the antiderivative of a function is NOT unique. We are free to change the constant term of the antiderivative and the function is still an antiderivative (because the derivative of a constant is zero, so changing the constant term of a function doesn't affect its derivative).  Symbolically speaking, if is an antiderivative of (which means ), then is also an antiderivative of . Let's make it a nice theorem.    Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .    What this theorem tells us is that all the antiderivatives of a function should only differ by a constant . If we can't determine what this constant is, then we will need to put a to suggest the existence of such a constant.  The argument of this theorem relies on the fact that the derivative of a constant is (so adding a constant to a function doesn't change its derivative). I also include a formal proof of this theorem below (formal as in the argument is more rigorous) if you wonder about how to prove this theorem.   Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!   Recall we have multiple notations back in calculus 1 to denote the concept of derivatives. Of course we will also need a notation to denote the concept of the (general) antiderivatives. We will be using indefinite integral to denote the general antiderivative of a function as follows:    The notation means that . We say that is the general antiderivative or the indefinite integral of .     But Richard... Isn't integral some sort of area under the curve? Why on earth we are using the same(ish) notation to represent the general antiderivative?  Well we will not be able to answer this question in this section. What we can do in this section is to forget about the area and interpret indefinite integrals as some general antiderivatives.   Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence     Guess-and-check-ing isn't the most efficient method. Just like we have a lot of formulas to help us take the derivative of a function, it will be so nice if we have some formulas to help us find the indefinite integral (aka the general antiderivative) of a function.    Some (basic) Indefinite Integral Formulas  Recall the indefinite integral (aka the general antiderivative) undoes the derivative, which means we can come up with some indefinite integral formulas by rewriting the derivative formulas (along with some basic manipulations).  A famous property you used a lot when taking the derivative is the linearity (meaning you can split up the addition\/subtraction and take out the scalar multiple). This property also holds for integrals.   Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant        We will look at the power rule since this is the mostly commonly used rule back in calculus 1.   Power Rule for Integrals     for .    Recall the power rule for derivatives works like this:    Multiply the power function by the exponent, and then     Subtract one from the exponent.   Since the indefinite integral undoes the derivative, then you can imagine we will need to undo the multiplication (by division) and the subtraction (by addition). But here is a small catch - when undoing the power rule for derivatives, not only we need to undo each of the step, but also the order of the steps . That is, the power rule for integrals should work like this:    Add one to the exponent, and then     Divide the power function by the exponent.      Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!    Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.    Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The below solution is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .    A big assumption in the power rule is that the power itself cannot be (this should be clear). The what should we do when the power is ? We have another formula to deal with this special case.   Antiderivative of          Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:      Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!     You may get an idea by now that simplifying the integrand is a good first step to evaluate an indefinite integral. That is, you want to distribute as much as you can and split up the terms of the integrand, guaranteed by the linearity, and integrate each term separately.  We also learned the derivative of the trigonometric function. Of course we can rewrite them to obtain the following batch of the integral formulas.   Basic Trigonometric Integrals           But Richard... some of the integrands seem complicated in the formulas above. How do I know when I need to use these formula? The short answer is you don't know really when you encounter a problem. While the integral formula for sine and cosine are really common and wide-used,   Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain     Later in the term, we will develop more strategies to integrate trigonometric integrals (mainly in ) so stay tuned!  There are two more integral formulas in this section, which are the integral formulas involving .   Integrals Involving           Evaluate the indefinite integral      Differential Equations and IVP  We know what an equation is. We dealt with equations where two sides of the equal sign are quantities (or numbers). We will briefly discuss differential equations , an equation that involves an unknown function and its first or higher derivatives. As you can imagine, the solution is, instead of number(s), function(s).   Solve the differential equation .   What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.     Your solution, if you play your cards right, is not unique. That is, your solution is NOT one single function. This is because we only found the indefinite integral of the right-hand side of the equation, which will result in an arbitrary constant, . But there is no way in the above example for us to figure out what this is... All we knew here is that is a mysterious constant here...  It would be great if we were told one more information that we can used to find this mysterious constant ...   Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .    The above example is called an Initial Value Problem (or IVP for short). The initial condition, for some fixed values of and , allows us to obtain a particular solution to the equation rather than a general solution.  We will finish this section by deriving the formula of the projectile motion as an investigation.    Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in .    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that        Something to ponder on...  There are actually two unanswered questions in this section, and they are   Why can we denote the general antiderivative using indefinite integrals? Isn't the concept of integral about some sort of area under the curve?    How are indefinite integrals (aka general antiderivative) related to definite integrals (aka signed area). Or are they even related?   These are both very good questions to ponder on! This is one of the reasons why calculus symbols are confusing, that the integral notation ( ) is being used to denote two different concepts here. You will find the answer to the first question in and the answer to the second question in .   P.S.: Yes we will cover first and then .    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or even exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.      Verify the following indefinite integrals by differentiation.   P.S.: You will learn how to evaluate these integrals in later chapters\/sections.                                  Evaluate the following indefinite integral.                                                              Solve the following IVP.      given that and        given that and       "
},
{
  "id": "sec53-IndefiniteIntegral-2-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.    "
},
{
  "id": "sec53-IndefiniteIntegral-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-3",
  "type": "Investigation",
  "number": "5.3.1",
  "title": "",
  "body": "  Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.       What function will give a derivative of ?    Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?    "
},
{
  "id": "def-Antiderivatives",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#def-Antiderivatives",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "  A function is an antiderivative of on an open interval if for all in .   "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": " Find an antiderivative of the function    What we are asked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...    "
},
{
  "id": "thm-GeneralAntiderivative",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-GeneralAntiderivative",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "",
  "body": "  Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .   "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.3.",
  "body": " Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!  "
},
{
  "id": "def-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#def-IndefiniteIntegrals",
  "type": "Definition",
  "number": "5.3.4",
  "title": "",
  "body": "  The notation means that . We say that is the general antiderivative or the indefinite integral of .   "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-17",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-17",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence    "
},
{
  "id": "thm-Linearity-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Linearity-IndefiniteIntegrals",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Linearity of the Indefinite Integrals.",
  "body": " Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant       "
},
{
  "id": "thm-PowerRule-Integrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-PowerRule-Integrals",
  "type": "Theorem",
  "number": "5.3.7",
  "title": "Power Rule for Integrals.",
  "body": " Power Rule for Integrals     for .   "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.7.",
  "body": " Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!  "
},
{
  "id": "note-findingVSverifying",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#note-findingVSverifying",
  "type": "Note",
  "number": "5.3.8",
  "title": "Finding\/Evaluating versus Verifying.",
  "body": " Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.  "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "type": "Example",
  "number": "5.3.9",
  "title": "",
  "body": " Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The below solution is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .   "
},
{
  "id": "thm-Antiderivative-Reciprocal",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Antiderivative-Reciprocal",
  "type": "Theorem",
  "number": "5.3.10",
  "title": "Antiderivative of <span class=\"process-math\">\\(\\boldsymbol{y = \\dfrac{1}{x}}\\)<\/span>.",
  "body": " Antiderivative of        "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-13",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-13",
  "type": "Example",
  "number": "5.3.11",
  "title": "",
  "body": " Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:    "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-14",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-14",
  "type": "Example",
  "number": "5.3.12",
  "title": "",
  "body": " Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!    "
},
{
  "id": "thm-BasicTrigIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-BasicTrigIntegrals",
  "type": "Theorem",
  "number": "5.3.13",
  "title": "Basic Trigonometric Integrals.",
  "body": " Basic Trigonometric Integrals         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-19",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-19",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain    "
},
{
  "id": "thm-IntegralInvolvingExponential",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-IntegralInvolvingExponential",
  "type": "Theorem",
  "number": "5.3.15",
  "title": "Integrals Involving <span class=\"process-math\">\\(\\boldsymbol{e^x}\\)<\/span>.",
  "body": " Integrals Involving         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-23",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-23",
  "type": "Example",
  "number": "5.3.16",
  "title": "",
  "body": " Evaluate the indefinite integral   "
},
{
  "id": "sec53-IndefiniteIntegral-7-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-7-3",
  "type": "Example",
  "number": "5.3.17",
  "title": "",
  "body": " Solve the differential equation .   What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.    "
},
{
  "id": "sec53-IndefiniteIntegral-7-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-7-6",
  "type": "Example",
  "number": "5.3.18",
  "title": "",
  "body": " Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .   "
},
{
  "id": "sec53-IndefiniteIntegral-7-9",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#sec53-IndefiniteIntegral-7-9",
  "type": "Investigation",
  "number": "5.3.2",
  "title": "",
  "body": "  Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in .    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that     "
},
{
  "id": "ws-sec53-3-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-4",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-3-5",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-4",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-4",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-5",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-5",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-6",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-7",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-7",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-8",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-8",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-4-9",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-4-9",
  "type": "Worksheet Exercise",
  "number": "12",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec53-5-2",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-5-2",
  "type": "Worksheet Exercise",
  "number": "13",
  "title": "",
  "body": "   given that and    "
},
{
  "id": "ws-sec53-5-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#ws-sec53-5-3",
  "type": "Worksheet Exercise",
  "number": "14",
  "title": "",
  "body": "   given that and    "
},
{
  "id": "sec54-FTCpartI",
  "level": "1",
  "url": "sec54-FTCpartI.html",
  "type": "Section",
  "number": "5.4",
  "title": "The Fundamental Theorem of Calculus, Part I",
  "body": " The Fundamental Theorem of Calculus, Part I  Text of section.   Something to ponder on...  Notice that the FTC, part I, has an assumption that says is continuous on some closed interval . Later in the class (likely towards the end of ), Richard will make a BIG deal of this assumption (so he is cool if you don't pay attention to it now). But why is this assumption necessary?  To give you an actual problem to think about, is it correct to evaluate the integral as follows? We will revisit this problem in and point out what's wrong with this line of work.   "
},
{
  "id": "sec55-FTCpartII",
  "level": "1",
  "url": "sec55-FTCpartII.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Fundamental Theorem of Calculus, Part II",
  "body": " The Fundamental Theorem of Calculus, Part II  Text of section.  "
},
{
  "id": "sec56-NetChange",
  "level": "1",
  "url": "sec56-NetChange.html",
  "type": "Section",
  "number": "5.6",
  "title": "Net Change as the Integral of a Rate of Change",
  "body": " Net Change as the Integral of a Rate of Change  Text of section.  "
},
{
  "id": "sec57-uSub",
  "level": "1",
  "url": "sec57-uSub.html",
  "type": "Section",
  "number": "5.7",
  "title": "The Substitution Method",
  "body": " The Substitution Method  Text of section.  "
},
{
  "id": "sec58-FurtherIntegralFormulas",
  "level": "1",
  "url": "sec58-FurtherIntegralFormulas.html",
  "type": "Section",
  "number": "5.8",
  "title": "Further Integral Formulas",
  "body": " Further Integral Formulas  Text of section.  "
},
{
  "id": "sec61-AreaBetweenCurves",
  "level": "1",
  "url": "sec61-AreaBetweenCurves.html",
  "type": "Section",
  "number": "6.1",
  "title": "Area Between Two Curves",
  "body": " Area Between Two Curves  Text of section.  "
},
{
  "id": "sec62-VolumeAverageValue",
  "level": "1",
  "url": "sec62-VolumeAverageValue.html",
  "type": "Section",
  "number": "6.2",
  "title": "Setting up Integrals: Volume, Density, Average Value",
  "body": " Setting up Integrals: Volume, Density, Average Value  Text of section.  "
},
{
  "id": "sec63-DishAndWasher",
  "level": "1",
  "url": "sec63-DishAndWasher.html",
  "type": "Section",
  "number": "6.3",
  "title": "Volume of Revolution: Disks and Washers",
  "body": " Volume of Revolution: Disks and Washers  Text of section.  "
},
{
  "id": "sec64-ShellMethod",
  "level": "1",
  "url": "sec64-ShellMethod.html",
  "type": "Section",
  "number": "6.4",
  "title": "Volume of Revolution: Cylindrical Shells",
  "body": " Volume of Revolution: Cylindrical Shells  Text of section.  "
},
{
  "id": "sec71-IntegrationByParts",
  "level": "1",
  "url": "sec71-IntegrationByParts.html",
  "type": "Section",
  "number": "7.1",
  "title": "Integration by Parts",
  "body": " Integration by Parts   In this section, you will learn a method to evaluate integrals called the Integration by Parts , which is derived from the Product Rule from derivatives.    After this section, students will be able to:     apply the integration by parts formula to evaluate integrals.    pick the that will make the process easier.        How would you evaluate the integral     Math would be so much easier if we could just take the integral of the two functions in the integrand separately. So let's do it! What would be the answer if we were to integrate each factor separately?   If we were to integrate each function separately, then we would obtain      Now check the answer you got from part (a). Is this a correct antiderivative of ?   If were the general antiderivative of , then it would imply that Yet, by the Product Rule of derivative, we know that See that the derivative of clearly doesn't equal to the integrand. Hence, we know that is NOT the general antiderivative of .   So we know that our method of integrating the function by integrating each factor separately is incorrect.      Then what is the correct answer to this integral?   This may seem like a totally irrelevant hint but what is the derivative of     Let's take the derivative of the function given in the hint. This implies that is an antiderivative of .  Recall that all antiderivatives of a function only differ by a constant (that is why we needed the to denote the general antiderivative). Hence, we know that      See that we can't just simply integrate each factor of the integrand when integrating a factor of two functions. We will need a new method that allows us to integrate a product of two functions.   Formula to integrate the product of two functions  Recall we learned a fancy formula, called the product rule, to take the derivative of a product of two functions back in calculus 1. For demonstration purposes, let's call these two functions and . If we wanted to take the derivative of , then the product rule tells us that If we want to spin this around using calculus 2 language about antiderivatives, then we can say that is an antiderivative of . Symbolically, this means that By the linearity of integral and a bit of the abuse of notation to treat the derivative symbols as fractions, we will obatin This is the equation we obtained.   You may be wondering... why talking about derivatives at all? Isn't the purpose of this section to come up with a way to integrate the product of two functions?  Well the magic comes when we subtract the on both sides of the equation. We will then obtain This is our formula to integrate the product of two functions! The name of this formula is called the Integration by Parts !   Integration by Parts Formula (indefinite version)        You may also wonder why we call this formula \"integration by parts \". That is because we didn't fully integrate the integrand using this formula. After using this formula, there is still a resulting integral that needs to be evaluated. So technically speaking we only integrated parts of the integrand using this formula and we need to do more work to evaluate the resulting integral.    Integration by Parts (Indefinite Version)  Now we have a fancy formula to help us integrate the product of two functions. Let's look at a couple examples on how to use this formula.   Evaluate the indefinite integral    Notice that the left-hand side of the integration by parts formula says . To use this formula, we will need to first determine what and are.    Let's pick , which is one of the factor in the integrand. Then the is forced to be .  Observing the integration by parts formula, we also need to know what and are in order to use this formula.  We can obtain by taking the derivative of . That is,   To obtain , we can integrate . That is,   To sum up, we have the following components:   We can now put all the components together using the integration by parts formula. Using the integration by parts formula results in an easier integral that we can deal with!  Now we put everything together, we can evaluate the integral as follows.     Notice that we will still end up with an integral to deal with after using the integration by parts formula. That is, this method is useful only if the resulting integral is easier to evaluate (or at least not more complicated than the original integral).  Strategically speaking, we want to pick a such that    is simpler than itself; and    we can actually integrate .     But that doesn't really answer the question on how to pick the strategically to make the process work out (and\/or make the problem easier). There is a \"LIPET\" test to help us pick a good . LIPET is an acronym that tells us how we should pick the in the following order:    L stands for Logarithmic functions;     I stands for Inverse Trigonometric functions;     P stands for Power functions;     E stands for Exponential functions;     T stands for Trigonometric functions;   Well... Exponential and Trigonometric functions are equally complicated when picking them to be the ...   Evaluate the indefinite integral    We are in the section of integration by parts so this is probably the method we should use to evaluate this integral.  In order to use the integration by parts formula, we will need to pick a and let the rest of the integral be the . What type of functions are we seeing in the integrand and which one should we pick to be the by the LIPET test?    Notice that there is a power function and a logarithmic function in the integrand. By the LIPET test, we should pick to be the logarithmic function.  Let . Then we have Using the integration by parts formula, we obtain     But... can we pick if we are feeling a bit rebellious and don't want to follow the LIPET test in the previous example? The short answer is that it depends... If we pick in the previous example, then the will be forced to be and we actually don't know what the indefinite integral of is yet (so we would get stuck in the setup when finding the ).  We will integrate in the next example. When you know what the indefinite integral of is, I encourage you to try picking in the previous example and see how much more work you need to deal with. Then you will realize that the LIPET test does save us a lot of work.   Evaluate the indefinite integral    Since we are in the section of integration by parts, this is probably going to be the method we are using in this problem.  Yet there is only one single function in the integrand... We have to pick a function to be and let the rest of the integral to be ... What choice of the function do we have as our ?    Well there is only one function in the integrand so this is going to be our only choice of ...  Let . Then we have Using the integration by parts formula, we obtain     Now we have one more formula that can go into your integral formula sheet!   Integral of the Natural Logarithmic Function        A question you may have now is whether we can always evaluate the resulting integral easily .  The short answer is no. The resulting integral is just another regular integral that may need to be evaluated using fancy methods.  But a rule of thumb here is that the resulting integral should NOT be more complicated than the original integral . We don't want to make the problem even worse to deal with.   Evaluate the indefinite integral    The method we should use to evaluate this integral will be integration by parts (we are covering this section now!). Then we will need to pick a and let the rest of the integral be the . By the LIPET test, what should we pick for the ?    Notice that there is a power function and a trigonometric function in the integrand. By the LIPET test, we should pick to be the power function.  Let . Then we have Using the integration by parts formula, we obtain   Now let's observe the resulting integral . This integral looks super familiar! We knew this indefinite integral equals to back from the investigation in this section!   If this observation isn't obvious, we can always evaluate this integral using integration by parts again.   This implies that     In the above example, notice that the resulting integral is still a bit complicated in the sense that you need to use the integration by parts (if you didn't make the observation about the investigation). But the good news is that this resulting integral is easier compared to the original integral because we have successfully removed the square from it.   Evaluate the indefinite integral    You may find a pattern here that using integration by parts will chip away the power one at a time. Then how many times do we need to use the integration by parts to evaluate this integral fully?    We will need to use the integration by parts formula three times to fully evaluate this integral. It is kind of tedious to do the same thing three times in a row (feel free to try it out if this sounds like a good challenge for you!).  Instead, we will evaluate this integral using a shortcut called the tabular method . As the name of this method suggests, this is a method that tracks the (and its derivatives) and the (and its antiderivatives) in a table.  We will set up the table as follows:   The first column consists of alternating signs (mainly because of the minus sign in the formula);    The secound column consists of and its consecutive derivatives until it reaches ;    The third column consists of and its consecutive antiderivatives until it reaches the row containing as the consecutive derivatives of .     Then the answer will be the sum of the product of cells connecting by the arrows.  As an example, below is the table constructed to evaluate the integral given in the prompt:     Sign                                              Then the answer is      But Richard... What if the resulting integral is equally complicated as the original integral... Well the good news is that we can sometimes deal with this case using a smart trick, which is to treat the evaluation process as an equation (this will allow us to solve for the integral).   Evaluate the indefinite integral    Notice that there are two functions being multiplied together in the integrand, which is an exponential function and a trigonometric function. By the LIPET test, which one should we pick to be the and what the is?    It turns out that it doesn't matter which function we pick to be our and the problem is equally complicated. For demonstration purposes, let's follow the LIPET test and pick to be the exponential function. I will encourage you to solve this problem again by picking the to be the trigonometric function. Then you can compare and contrast the work (they are mostly the same anyways).  Let . Then we have Using the integration by parts formula, we obtain   Hmm the resulting integral seems equally complicated in the sense that we still have an exponential function and an trigonometric function in it (but the only difference is that the became an ).  Let's try using the integration by parts formula again to the resulting integral and see if it will lead us somewhere.  Let . Then we have Using the integration by parts formula, we obtain   Let's put everything together, and we obtain the following   Well the resulting integral ended up being the same as the original integral. So we are in a loop using the integration by parts. Does it mean this problem is unsolvable and we just have to give up?  Of course not! Richard is coming to your rescue! Richard is feeling lazy and he doesn't want to keep on writing (or in this case, tying) the integral all the time, so he will just call it . That is, let's define Then the last line of our work will become the following equation : Remember the goal here is to figure out what is. This seems like an equation that we can totally solve for .  Adding on both sides and then divide both sides of the equation by 2, we obtain This implies that   Ha! We did it! We evaluated the integral!    Observe that the trick in the previous example is to treat the integral as a variable and solve for it if the integration by pats loops you back to the same integral .    Integration by parts OR -sub?  Now that we have learned two fancy methods to evaluate integrals, integration by parts and -sub. How do I know which one I should use when evaluating integrals?   Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    Probably not a very useful hint...  Trust your gut and just pick one! If the method you picked doesn't work, then try the other one! Be bold! This is just a math question, not a life or death situation!    Let's try using the integration by parts first since we are covering this section now. I am seeing a power function and a trigonometric (ish) function being multiplied in the integrand. By the LIPET test, I will pick , which implies that .  Hmm but I am stuck now since I don't know what is... (and it turns out that we can't integrate anyways...). But that's okay! At least we can rule out a bad method!  Now let's try using -sub here. Let . Then , which implies that . We obtain      Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    I am going to be bold and try using the integration by parts again. By the LIPET test, we will pick to be .  Let . Then we have Using the integration by parts formula, we obtain Hey! The resulting integral is easier and we actually know what the integral of is! We found it out in one of the previous examples. Using the result from that example, we obtain   We just picked a method and it works out after all! Yay!    I am sure some of you can find some patterns here. We will summarize all the methods and some strategies to evaluate integrals later in so I won't go too in dept in this section.  The takeaway message here is to be bold and pick a method. Don't be afraid to switch methods if one doesn't work (or when you get stuck).    Integration by Parts (Definite Version)  There is not much to say in this part since the only additional step to do here is to plug in the limits of integration and do the subtraction...  Remember that the variable doesn't change when using the integration by parts formula (the variable remains to be throughout the whole process) so we don't need to adjust the limits of integration.   Integration by Parts Formula (definite version)        We will wrap up this section by looking at an example of evaluating a definite integral using integration by parts.   Evaluate the definite integral    This is similar to one of the previous examples that there is only one function in the integrand... So there is only one choice we have for our ...    Our only choice of is the ...  Let . Then we have Using the integration by parts formula, we obtain   Recall we evaluated the resulting integral back in using -sub. For your convenience, I will include the result below:   This implies that       Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or even exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following indefinite integral using integration by parts .                                  Evaluate the following indefinite integral using multiple methods indicated in the hint below.   P.S.: I encourage you to try evaluating the following integral in a different way (be rebellious and adventurous a bit). We will talk about strategies in evaluating integrals in where one of the important idea is that there may be multiple strategies to evaluate an integral.         Use integration by parts first and then -sub.           Use -sub first and then integration by parts.        Evaluate the following definite integral. Make sure your notation is clear and correct.                   "
},
{
  "id": "sec71-IntegrationByParts-2-2",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#sec71-IntegrationByParts-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     apply the integration by parts formula to evaluate integrals.    pick the that will make the process easier.    "
},
{
  "id": "sec71-IntegrationByParts-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#sec71-IntegrationByParts-3",
  "type": "Investigation",
  "number": "7.1.1",
  "title": "",
  "body": "  How would you evaluate the integral     Math would be so much easier if we could just take the integral of the two functions in the integrand separately. So let's do it! What would be the answer if we were to integrate each factor separately?   If we were to integrate each function separately, then we would obtain      Now check the answer you got from part (a). Is this a correct antiderivative of ?   If were the general antiderivative of , then it would imply that Yet, by the Product Rule of derivative, we know that See that the derivative of clearly doesn't equal to the integrand. Hence, we know that is NOT the general antiderivative of .   So we know that our method of integrating the function by integrating each factor separately is incorrect.      Then what is the correct answer to this integral?   This may seem like a totally irrelevant hint but what is the derivative of     Let's take the derivative of the function given in the hint. This implies that is an antiderivative of .  Recall that all antiderivatives of a function only differ by a constant (that is why we needed the to denote the general antiderivative). Hence, we know that     "
},
{
  "id": "thm-IntegrationByParts",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#thm-IntegrationByParts",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "Integration by Parts Formula (indefinite version).",
  "body": " Integration by Parts Formula (indefinite version)       "
},
{
  "id": "subsec-712-Indefinite-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-3",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": " Evaluate the indefinite integral    Notice that the left-hand side of the integration by parts formula says . To use this formula, we will need to first determine what and are.    Let's pick , which is one of the factor in the integrand. Then the is forced to be .  Observing the integration by parts formula, we also need to know what and are in order to use this formula.  We can obtain by taking the derivative of . That is,   To obtain , we can integrate . That is,   To sum up, we have the following components:   We can now put all the components together using the integration by parts formula. Using the integration by parts formula results in an easier integral that we can deal with!  Now we put everything together, we can evaluate the integral as follows.    "
},
{
  "id": "subsec-712-Indefinite-7",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-7",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": " Evaluate the indefinite integral    We are in the section of integration by parts so this is probably the method we should use to evaluate this integral.  In order to use the integration by parts formula, we will need to pick a and let the rest of the integral be the . What type of functions are we seeing in the integrand and which one should we pick to be the by the LIPET test?    Notice that there is a power function and a logarithmic function in the integrand. By the LIPET test, we should pick to be the logarithmic function.  Let . Then we have Using the integration by parts formula, we obtain    "
},
{
  "id": "subsec-712-Indefinite-10",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-10",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": " Evaluate the indefinite integral    Since we are in the section of integration by parts, this is probably going to be the method we are using in this problem.  Yet there is only one single function in the integrand... We have to pick a function to be and let the rest of the integral to be ... What choice of the function do we have as our ?    Well there is only one function in the integrand so this is going to be our only choice of ...  Let . Then we have Using the integration by parts formula, we obtain    "
},
{
  "id": "thm-Integral_NaturalLog",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#thm-Integral_NaturalLog",
  "type": "Theorem",
  "number": "7.1.5",
  "title": "Integral of the Natural Logarithmic Function.",
  "body": " Integral of the Natural Logarithmic Function       "
},
{
  "id": "subsec-712-Indefinite-16",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-16",
  "type": "Example",
  "number": "7.1.6",
  "title": "",
  "body": " Evaluate the indefinite integral    The method we should use to evaluate this integral will be integration by parts (we are covering this section now!). Then we will need to pick a and let the rest of the integral be the . By the LIPET test, what should we pick for the ?    Notice that there is a power function and a trigonometric function in the integrand. By the LIPET test, we should pick to be the power function.  Let . Then we have Using the integration by parts formula, we obtain   Now let's observe the resulting integral . This integral looks super familiar! We knew this indefinite integral equals to back from the investigation in this section!   If this observation isn't obvious, we can always evaluate this integral using integration by parts again.   This implies that    "
},
{
  "id": "subsec-712-Indefinite-18",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-18",
  "type": "Example",
  "number": "7.1.7",
  "title": "",
  "body": " Evaluate the indefinite integral    You may find a pattern here that using integration by parts will chip away the power one at a time. Then how many times do we need to use the integration by parts to evaluate this integral fully?    We will need to use the integration by parts formula three times to fully evaluate this integral. It is kind of tedious to do the same thing three times in a row (feel free to try it out if this sounds like a good challenge for you!).  Instead, we will evaluate this integral using a shortcut called the tabular method . As the name of this method suggests, this is a method that tracks the (and its derivatives) and the (and its antiderivatives) in a table.  We will set up the table as follows:   The first column consists of alternating signs (mainly because of the minus sign in the formula);    The secound column consists of and its consecutive derivatives until it reaches ;    The third column consists of and its consecutive antiderivatives until it reaches the row containing as the consecutive derivatives of .     Then the answer will be the sum of the product of cells connecting by the arrows.  As an example, below is the table constructed to evaluate the integral given in the prompt:     Sign                                              Then the answer is    "
},
{
  "id": "subsec-712-Indefinite-20",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-712-Indefinite-20",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": " Evaluate the indefinite integral    Notice that there are two functions being multiplied together in the integrand, which is an exponential function and a trigonometric function. By the LIPET test, which one should we pick to be the and what the is?    It turns out that it doesn't matter which function we pick to be our and the problem is equally complicated. For demonstration purposes, let's follow the LIPET test and pick to be the exponential function. I will encourage you to solve this problem again by picking the to be the trigonometric function. Then you can compare and contrast the work (they are mostly the same anyways).  Let . Then we have Using the integration by parts formula, we obtain   Hmm the resulting integral seems equally complicated in the sense that we still have an exponential function and an trigonometric function in it (but the only difference is that the became an ).  Let's try using the integration by parts formula again to the resulting integral and see if it will lead us somewhere.  Let . Then we have Using the integration by parts formula, we obtain   Let's put everything together, and we obtain the following   Well the resulting integral ended up being the same as the original integral. So we are in a loop using the integration by parts. Does it mean this problem is unsolvable and we just have to give up?  Of course not! Richard is coming to your rescue! Richard is feeling lazy and he doesn't want to keep on writing (or in this case, tying) the integral all the time, so he will just call it . That is, let's define Then the last line of our work will become the following equation : Remember the goal here is to figure out what is. This seems like an equation that we can totally solve for .  Adding on both sides and then divide both sides of the equation by 2, we obtain This implies that   Ha! We did it! We evaluated the integral!   "
},
{
  "id": "subsec-714-Comparing_with_usub-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-714-Comparing_with_usub-3",
  "type": "Example",
  "number": "7.1.9",
  "title": "",
  "body": " Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    Probably not a very useful hint...  Trust your gut and just pick one! If the method you picked doesn't work, then try the other one! Be bold! This is just a math question, not a life or death situation!    Let's try using the integration by parts first since we are covering this section now. I am seeing a power function and a trigonometric (ish) function being multiplied in the integrand. By the LIPET test, I will pick , which implies that .  Hmm but I am stuck now since I don't know what is... (and it turns out that we can't integrate anyways...). But that's okay! At least we can rule out a bad method!  Now let's try using -sub here. Let . Then , which implies that . We obtain    "
},
{
  "id": "subsec-714-Comparing_with_usub-4",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-714-Comparing_with_usub-4",
  "type": "Example",
  "number": "7.1.10",
  "title": "",
  "body": " Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    I am going to be bold and try using the integration by parts again. By the LIPET test, we will pick to be .  Let . Then we have Using the integration by parts formula, we obtain Hey! The resulting integral is easier and we actually know what the integral of is! We found it out in one of the previous examples. Using the result from that example, we obtain   We just picked a method and it works out after all! Yay!   "
},
{
  "id": "thm-IntegrationByParts-Definite",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#thm-IntegrationByParts-Definite",
  "type": "Theorem",
  "number": "7.1.11",
  "title": "Integration by Parts Formula (definite version).",
  "body": " Integration by Parts Formula (definite version)       "
},
{
  "id": "subsec-715-Definite-6",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#subsec-715-Definite-6",
  "type": "Example",
  "number": "7.1.12",
  "title": "",
  "body": " Evaluate the definite integral    This is similar to one of the previous examples that there is only one function in the integrand... So there is only one choice we have for our ...    Our only choice of is the ...  Let . Then we have Using the integration by parts formula, we obtain   Recall we evaluated the resulting integral back in using -sub. For your convenience, I will include the result below:   This implies that    "
},
{
  "id": "ws-sec71-3-2",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec71-3-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec71-3-4",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec71-3-5",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec71-4-2",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-4-2",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      Use integration by parts first and then -sub.    "
},
{
  "id": "ws-sec71-4-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-4-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      Use -sub first and then integration by parts.    "
},
{
  "id": "ws-sec71-5-2",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-5-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec71-5-3",
  "level": "2",
  "url": "sec71-IntegrationByParts.html#ws-sec71-5-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "sec72-TrigIntegral",
  "level": "1",
  "url": "sec72-TrigIntegral.html",
  "type": "Section",
  "number": "7.2",
  "title": "Trigonometric Integrals",
  "body": " Trigonometric Integrals   In this section, you will learn some common strategies to evaluate trigonometric integrals.    After this section, students will be able to:     blahblahblah    blahblahblah      "
},
{
  "id": "sec72-TrigIntegral-2-2",
  "level": "2",
  "url": "sec72-TrigIntegral.html#sec72-TrigIntegral-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     blahblahblah    blahblahblah    "
},
{
  "id": "sec73-TrigSub",
  "level": "1",
  "url": "sec73-TrigSub.html",
  "type": "Section",
  "number": "7.3",
  "title": "Trigonometric Substitution",
  "body": " Trigonometric Substitution  Text of section.  "
},
{
  "id": "sec74-HyperbolicIntegral",
  "level": "1",
  "url": "sec74-HyperbolicIntegral.html",
  "type": "Section",
  "number": "7.4",
  "title": "Integrals Involving Hyperbolic and Inverse Hyperbolic Functions",
  "body": " Integrals Involving Hyperbolic and Inverse Hyperbolic Functions  Text of section.  "
},
{
  "id": "sec75-PartialFraction",
  "level": "1",
  "url": "sec75-PartialFraction.html",
  "type": "Section",
  "number": "7.5",
  "title": "The Method of Partial Fractions",
  "body": " The Method of Partial Fractions  Text of section.  "
},
{
  "id": "sec76-StrategiesIntegral",
  "level": "1",
  "url": "sec76-StrategiesIntegral.html",
  "type": "Section",
  "number": "7.6",
  "title": "Strategies for Integration",
  "body": " Strategies for Integration  Text of section.  "
},
{
  "id": "sec77-ImproperIntegral",
  "level": "1",
  "url": "sec77-ImproperIntegral.html",
  "type": "Section",
  "number": "7.7",
  "title": "Improper Integrals",
  "body": " Improper Integrals  Text of section.  "
},
{
  "id": "sec78-NumericalIntegration",
  "level": "1",
  "url": "sec78-NumericalIntegration.html",
  "type": "Section",
  "number": "7.8",
  "title": "Numerical Integration",
  "body": " Numerical Integration  Text of section.  "
},
{
  "id": "sec81-Probability",
  "level": "1",
  "url": "sec81-Probability.html",
  "type": "Section",
  "number": "8.1",
  "title": "Probability and Integration",
  "body": " Probability and Integration  Text of section.  "
},
{
  "id": "sec82-ArcLength",
  "level": "1",
  "url": "sec82-ArcLength.html",
  "type": "Section",
  "number": "8.2",
  "title": "Arc Length and Surface Area",
  "body": " Arc Length and Surface Area  Text of section.  "
},
{
  "id": "sec107-TaylorPolynomial",
  "level": "1",
  "url": "sec107-TaylorPolynomial.html",
  "type": "Section",
  "number": "8.3",
  "title": "Taylor Polynomials",
  "body": " Taylor Polynomials   Note: This is section 10.7 if your textbook is the 4th edition; this is section 8.4 if your textbook is 3rd (or earlier) edition.  "
},
{
  "id": "secA1-ConceptualFoundation",
  "level": "1",
  "url": "secA1-ConceptualFoundation.html",
  "type": "Section",
  "number": "A.1",
  "title": "Conceptual Foundation of Integrals",
  "body": " Conceptual Foundation of Integrals  Text of section.   Structure of the Integral  The investigation tasks in this section will ask you to think about integrals in a different way. Recall the two major ways you think about integrals so far are:   Some signed area under the curve, and    Some general antiderivative of the integrand, plug some numbers in, and do the subtraction.   Well it turns out that neither of them are the actual meaning of integrals. The area aspect is a graphical interpretation of integrals and the antiderivative is just one method to evaluate integrals, guaranteed by the FTC. These two approaches are limited when applying integrals to real-world problems since (1) we don't always have a graph to work with, and (2) not all functions will have a nice antiderivatives we can work with.   The Great Gorilla Jump   Imagine this: a gorilla, suited up with a parachute, climbs to the top of a tall city building as part of a special wildlife training experiment. After a brief moment of hesitation, the gorilla bravely leaps off the edge. As the parachute deploys and air resistance kicks in, you, as one of the researchers on the ground, begin recording data to study how the gorilla's velocity changes over time. Using high-speed sensors, the team records the gorilla’s downward velocity every half-second as it falls. Note that the gorilla touched the ground just after 5 seconds. The recorded data is shown below.  Data Table of Velocity every half-second    Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19        Testing      Proof of the Fundamental Theorem of Calculus   "
},
{
  "id": "subsubsec-A111-GorillaJump-2-1-1",
  "level": "2",
  "url": "secA1-ConceptualFoundation.html#subsubsec-A111-GorillaJump-2-1-1",
  "type": "Table",
  "number": "A.1.1",
  "title": "Data Table of Velocity every half-second",
  "body": " Data Table of Velocity every half-second    Time (in seconds)  Velocity (in feet per second)    0  0    0.5  5    1.0  7    1.5  8    2.0  11    2.5  11.5    3.0  12    3.5  13    4.0  15.5    4.5  18    5.0  19    "
},
{
  "id": "secA2-StrategiesEvaluate",
  "level": "1",
  "url": "secA2-StrategiesEvaluate.html",
  "type": "Section",
  "number": "A.2",
  "title": "More Strategies to Evaluate Integrals",
  "body": " More Strategies to Evaluate Integrals  Text of section.   Trigonometric Integrals    Approximation using Taylor Polynomials   "
},
{
  "id": "secA3-ApplicationIntegral",
  "level": "1",
  "url": "secA3-ApplicationIntegral.html",
  "type": "Section",
  "number": "A.3",
  "title": "Some Famous Applications of Integrals",
  "body": " Some Famous Applications of Integrals  Text of section.   A physics and engineering application -- Work    Embedded PDF Example  Below is a PDF you can scroll through directly in the page:    MTH252 Final Exam (Summer 2025)  Your browser does not support iframes.    You can scroll through the PDF above to review the exam.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
