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
  "body": " The Indefinite Integral   In this section, you will learn a concept called \"antiderivative\".    After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.        Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.      What function will give a derivative of ?   Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?     We can consider taking the derivative as an operation we can perform on a function. A natural question to wonder is whether we can undo this operation (that is, we know the derivative of a function and we want to find the original function by undoing the derivative). We actually can and this is the main concept we will explore in this section.   Antiderivatives and Indefinite Integrals  Let's define the term antiderivative first (it might be self-explanatory...).    A function is an antiderivative of on an open interval if for all in .    In other words, antiderivative \"undoes\" derivative. Let be a function and be its antiderivative, then its relation is captured in the following diagram:   Insert the diagram here    Find an antiderivative of the function    What we are asked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...     Observe that the antiderivative of a function is NOT unique. We are free to change the constant term of the antiderivative and the function is still an antiderivative (because the derivative of a constant is zero, so changing the constant term of a function doesn't affect its derivative).  Symbolically speaking, if is an antiderivative of (which means ), then is also an antiderivative of . Let's make it a nice theorem.    Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .    What this theorem tells us is that all the antiderivatives of a function should only differ by a constant . If we can't determine what this constant is, then we will need to put a to suggest the existence of such a constant.  The argument of this theorem relies on the fact that the derivative of a constant is (so adding a constant to a function doesn't change its derivative). I also include a formal proof of this theorem below (formal as in the argument is more rigorous) if you wonder about how to prove this theorem.   Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!   Recall we have multiple notations back in calculus 1 to denote the concept of derivatives. Of course we will also need a notation to denote the concept of the (general) antiderivatives. We will be using indefinite integral to denote the general antiderivative of a function as follows:    The notation means that . We say that is the general antiderivative or the indefinite integral of .     But Richard... Isn't integral some sort of area under the curve? Why on earth we are using the same(ish) notation to represent the general antiderivative?  Well we will not be able to answer this question in this section. What we can do in this section is to forget about the area and interpret indefinite integrals as some general antiderivatives.   Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence     Guess-and-check-ing isn't the most efficient method. Just like we have a lot of formulas to help us take the derivative of a function, it will be so nice if we have some formulas to help us find the indefinite integral (aka the general antiderivative) of a function.    Some (basic) Indefinite Integral Formulas  Recall the indefinite integral (aka the general antiderivative) undoes the derivative, which means we can come up with some indefinite integral formulas by rewriting the derivative formulas (along with some basic manipulations).  A famous property you used a lot when taking the derivative is the linearity (meaning you can split up the addition\/subtraction and take out the scalar multiple). This property also holds for integrals.   Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant        We will look at the power rule since this is the mostly commonly used rule back in calculus 1.   Power Rule for Integrals     for .    Recall the power rule for derivatives works like this:    Multiply the power function by the exponent, and then     Subtract one from the exponent.   Since the indefinite integral undoes the derivative, then you can imagine we will need to undo the multiplication (by division) and the subtraction (by addition). But here is a small catch - when undoing the power rule for derivatives, not only we need to undo each of the step, but also the order of the steps . That is, the power rule for integrals should work like this:    Add one to the exponent, and then     Divide the power function by the exponent.      Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!    Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.    Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The below solution is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .    A big assumption in the power rule is that the power itself cannot be (this should be clear). The what should we do when the power is ? We have another formula to deal with this special case.   Antiderivative of          Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:      Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!     You may get an idea by now that simplifying the integrand is a good first step to evaluate an indefinite integral. That is, you want to distribute as much as you can and split up the terms of the integrand, guaranteed by the linearity, and integrate each term separately.  We also learned the derivative of the trigonometric function. Of course we can rewrite them to obtain the following batch of the integral formulas.   Basic Trigonometric Integrals           But Richard... some of the integrands seem complicated in the formulas above. How do I know when I need to use these formula? The short answer is you don't know really when you encounter a problem. While the integral formula for sine and cosine are really common and wide-used,   Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain     Later in the term, we will develop more strategies to integrate trigonometric integrals (mainly in ) so stay tuned!  There are two more integral formulas in this section, which are the integral formulas involving .   Integrals Involving           Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain     We will be developing more and more integral formulas throughout the term. It is a good strategy to organize all the formulas in an integral formula sheet since you will be using some of the formulas again and again and again and again in this class.    Differential Equations and IVP  We know what an equation is. We dealt with equations where two sides of the equal sign are quantities (or numbers). We will briefly discuss differential equations , an equation that involves an unknown function and its first or higher derivatives. As you can imagine, the solution is, instead of number(s), function(s).   Solve the differential equation .   What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.     Your solution, if you play your cards right, is not unique. That is, your solution is NOT one single function. This is because we only found the indefinite integral of the right-hand side of the equation, which will result in an arbitrary constant, . But there is no way in the above example for us to figure out what this is... All we knew here is that is a mysterious constant here...  It would be great if we were told one more information that we can used to find this mysterious constant ...   Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .    The above example is called an Initial Value Problem (or IVP for short). The initial condition, for some fixed values of and , allows us to obtain a particular solution to the equation rather than a general solution.  We will finish this section by deriving the formula of the projectile motion as an investigation.    Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in .    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that        Something to ponder on...  There are actually two unanswered questions in this section, and they are   Why can we denote the general antiderivative using indefinite integrals? Isn't the concept of integral about some sort of area under the curve?    How are indefinite integrals (aka general antiderivative) related to definite integrals (aka signed area). Or are they even related?   These are both very good questions to ponder on! This is one of the reasons why calculus symbols are confusing, that the integral notation ( ) is being used to denote two different concepts here. You will find the answer to the first question in and the answer to the second question in .   P.S.: Yes we will cover first and then .    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.      Verify the following indefinite integrals by differentiation.   P.S.: You will learn how to evaluate these integrals in later chapters\/sections.                                  Evaluate the following indefinite integral.                                                              Solve the following IVP.      given that and        given that and       "
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
  "body": "  Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.      What function will give a derivative of ?   Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?    "
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
  "body": " Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain    "
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
  "body": " The Fundamental Theorem of Calculus, Part I  Text of section.   A Corollary of the Fundamental Theorem of Calculus    Why is this corollary important?    Something to ponder on...  Notice that the FTC, part I, has an assumption that says is continuous on some closed interval . Later in the class (likely towards the end of ), Richard will make a BIG deal of this assumption (so he is cool if you don't pay attention to it now). But why is this assumption necessary?  To give you an actual problem to think about, is it correct to evaluate the integral as follows? We will revisit this problem in and point out what's wrong with this line of work.   "
},
{
  "id": "sec55-FTCpartII",
  "level": "1",
  "url": "sec55-FTCpartII.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Fundamental Theorem of Calculus, Part II",
  "body": " The Fundamental Theorem of Calculus, Part II  Text of section.   Accumulation Functions    THE Fundamental Theorem of Calculus    To apply the FTC...   "
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
  "body": " The Substitution Method   In this section, you will learn one technique of evaluating integrals, called the substitution method (also known as the -sub). This is one of the most important and widely used methods in this class.    After this section, students will be able to:     evaluate indefinite integrals using -sub and rewrite the final answer in terms of .    recognize which integrals can be evaluated using -sub and which ones cannot be evaluated using -sub.    apply -sub in definite integrals by changing the limits of integration to match the new variable.        Recall we learned the chain rule back in calculus 1, which is a method to differentiate composite functions.  Let be a composite function. We can see that is the outside function and is the inside function. The chain rule says that    Note: I know that this notation is different from the typical and you saw back in calculus 1. I am using and to match up the typical calculus 2 notation but the idea is the same.     What is the derivative of of the function ?    Evaluate the indefinite integral      Substitution Method for Indefinite Integrals   Substitution Method for Indefinite Integrals   If , and is a differentiable function whose range includes the domain of , then      Evaluate the indefinite integral using the formula in the above theorem.   To use the formula, we need a composite function and the derivative of the inside function being multiplied as the integrand. So the two questions to consider here are:   What is a composite function that stood out to you? After you have identified a composite function, what is the outside function and the inside function?  Label the outside function as and the inside function as .     What is the derivative of the inside function, ? Can we find as a factor in the integrand?   After you found the components of the integrand and checked off the second question, try figuring out what is and obtaining the answer by plugging in each component to the formula.    There is only one composite function in the integrand, which is . Then we can label Observe that , which is a factor in the integrand. Then this integral matches up with the left-hand side of the formula in .  We know that Then we can plug in all these components to the formula and obtain the answer:     A common question here is where the went in the process since we only integrated the sine function. This is a great question that leads us to develop a less-confusing method for -sub (using differentials).  Richard can for sure answer this question now! Recall is the derivative of the inside function, which appears out of no where in the chain rule for derivative. Of course this part should be disappearing if we undoes the derivative.  We will next discuss another presentation of -sub using differentials. This presentation is also the reason why we call this method the -sub .   Substitution Using Differentials  As the name of -sub suggested, we should be substituting for something. Let's forget about the formula we learned above and try a problem using only substitution (so you can forget about the above formula for a while)!   Evaluate the indefinite integral    Recall should be some inside function in a composite function. Then what is a composite function that stood out to you and what should the be?  After you determine what the is, try substituting ALL the 's in the indefinite integral with , including the differential . The resulting integral should be easier than the original integral in the prompt.    The composite function in the integrand is , with the inside function of . So let's pick . If we substitute for , then the integral becomes Sure the integral becomes a bit easier. But this is also a super confusing integral since it includes TWO different variables, and .  One way to resolve this confusion is to replace ALL the 's in terms of 's. The hardest substitution here is the differential, ... How do we replace the in terms of ...  One expression that contains both and is the derivative of with respect to . Recall we defined . Then If we abuse the notation a bit by treating the derivative notation as a fraction, we can multiply the on both sides of this equation. Then we obtain Hmm the looks super familiar... They are also part of the integral! Hence, we can substitute with as follows: Now there is only one variable, , in the integral and we for sure know how to evaluate this integral! Using the power rule, we know that Don't forget that is essentially . We can obtain the final answer by replacing back for .     Observe that the derivative of the inside function, , is being absorbed as part of the differential, . This is essentially the change of variable trick by treating as the new variable. Symbolically, we can adjust the formula in the above theorem as follows:   There is certainly an advantage of using this method. We don't need to worry about matching up each component with the formula in the above theorem in order to use the formula. But the tradeoff here is that we need to substitute ALL the 's (or whatever the previous variable is) with 's (or whatever we call the new variable), including the differentials. Sometimes this is not an easy job (or sometimes it is just impossible).  Richard doesn't like to memorize one more formula so he likes to do all of his -sub problems using the differential approach (there is one more reason why Richard likes this approach).   Evaluate the indefinite integral    We are learning -sub so we probably can evaluate this integral using -sub. Recall we pick to be some inside function of a composite function. What is a we can pick here?    There are more than one composite functions so there are more than one choice of we can pick.  Richard will pick (and he has a good reason). He will work through the problem and let's see if you can figure out what this good reason is.  Let . To find the , we will need to take the derivative of with respect to . Then we obtain Observe that we can find in the integral, which equals to by the above equation. Substituting and in the integral, we obtain     The reason why Richard knows picking will work out in the above example is because he noticed that , which is if we neglect the constant multiple, is a factor in the integrand. Observe that he can instantly replace by quickly.  In general, whatever we pick, we know this choice of will likely to work out if we can find as a factor of the integrand (and we can neglect the constant multiple of ). We will elaborate this idea more in the section of the limitation of -sub.   Can we isolate in the above example?  Recall the substitution Richard used in the previous example is to replace by based on the equation A natural follow-up question here is whether we can isolate the entirely and replace to the integral as follows: It seems like this \"divide-and-cancel\" method will lead us to the same answer anyways, so is this a valid method?  Well I guess it all depends on how much you care about the rigor in math. If all you care about is to obtain an answer, then by all means. This method will work 90% of the time (I know it sounds sarcastic but it is really not...).  But if you do care about the rigor in math (like Richard), then this method should be bugging you because the divisor, , could potentially be zero here since is in the domain of the integrand. In math, we never want to divide something that could potentially be zero. So dividing a variable before verifying it can never be zero is a bad idea.  An example I always use if I am teaching algebra and precalculus at PCC is to solve the equation by dividing an on both sides of the equation. While we obtain a solution indeed through the division of , we also miss the solution of .  I probably won't give you any questions in this extreme that the \"divide-and-cancel\" method will lead to the loss of some solution (because this isn't a differential equation class). So I will leave it up to you if you want to use this \"divide-and-cancel\" method. At least there is no harm in this class (I think...).    Evaluate the indefinite integral    Let's evaluate this integral using -sub. Recall a good choice of is the ones that you can find its derivative as a factor of the integrand. So what is a good choice of ?    There is only one composite function in the integrand, which implies that the , aka the only inside function, should be .  Let . To replace in terms of , we will differentiate with respect to . Then we obtain     Linear -sub  Recall (blahblahblah)  Now let's try the following problem and see if you can obtain the answer quickly .   Evaluate the indefinite integral    Observe that the inside function, which we can for sure call it , is a linear function. Then what is the slope and how can we obtain the answer quickly without going through all the work for -sub?    Observe that the inside function, , is a linear function with the slope of . Then we can divide the slope, integrate the outside function, and plug in the inside function (and don't forget the ).    If this line of work doesn't convince you, then I would suggest you working out this problem using -sub and observe how the answer can be obtained quickly.       Hmm but does have to be some inside function? The answer is no... Essentially we can pick whatever we want in the integrand to be .   Evaluate the indefinite integral    Observe that there is a composite function in the integrand with the inside function of . Based on our previous strategy, we should be calling it .  Let's try picking to be the inside function and see what will happen.  If you are ready to give up or open to another method, try picking and see if it will work out nicely.    Choice #1: Let   This will work out but the work is a bit more complicated since you will need to -sub it twice.   Let . Then we have This implies that Okay... we are able to replace all the 's with 's and the integral is a bit easier (see that there is no more trigonometric functions in the integrand). But this is kind of discouraging since there is no formula to help us integrate this function...  To proceed, we will need to do another -sub by letting . Then This implies that Ha! We evaluated the integral! We will just need to put everything together and replace back the variable to .     Choice #2: Let  Let's follow Richard's hint and let . Then we have This implies that    Observe that this choice of made the process a lot easier .     How do I know what is the I should pick?  For starters, we can pick whatever in the integrand to be the . But whatever you pick, you want to make sure two things:   All the variables should be turned to (or whatever the new variable is), including the differential, and    the new integral after the substitution should be easier to evaluate compared to the original integral.   If your choice of doesn't do the above two things, then this is a bad and you should either pick another or try a different method.   But there is a difference between picking a good and picking the most efficient ...  The above example should demonstrate the difference. The first choice of is a good but is not the most efficient option, while the second choice of is the most efficient since we were able to evaluate the integral right after the substitution.  So I guess the next question here is how to pick the most efficient ... Well it actually takes a bit guess-and-check-ing and experience. I will encourage you to first practice on how to pick a good  to make sure at least you can solve the problem. When you are comfortable and proficient at using -sub, then knowing what the most efficient will come naturally.      Limitation of -sub  Recall we can take the derivative of ALL composite functions using the chain rule. Since we derived the -sub formula from the chain rule, does it mean we can integrate ALL the composite functions using this method of -sub? Let's think about this question in the following example:    Determine whether we can evaluate the following integral using -sub. If so, do it. If not, why not?        A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We can evaluate this integral using -sub (or even easier if you can observe that the inside function is a linear function).  Let . Then we have This implies that          A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We cannot evaluate this integral using -sub because we won't be able to group the out of it. But let's try using -sub nevertheless and see where we will get stuck.  Let . Then we have Yet there is no extra factor of in the integrand that we can group together with to give us a out of it. So we are stuck...   if you are thinking of using the \"divide-and-cancel\" method...  You may consider isolating the as follows and substitute as follows: Well the resulting integral after the substitution still contains two variables (since there is not a factor of in the integrand to cancel the in the denominator with).  Well one way to resolve this issue is to figure out what is in terms of (by isolating in the equation of ).  Observe that . Then the resulting integral becomes See that the integral doesn't become easier... This should be a cue that -sub doesn't work. We should give up and try something else.     Fun fact about this integral  It turns out that there is no elementary function     We can make an observation from the above example about the -sub-ability of an integral. If part of the is missing in the integrand, and it is more than just a constant, then -sub won't work in general.   We know -sub won't work if part of is missing, and the missing part is a non-constant. But what if we go the other way. What if the integrand has an extra non-constant piece? Can we still -sub the integral?   Evaluate the indefinite integral    There is an inside function screaming to us, which is . Let's pick this as our . But what about the extra factor of ... We for sure don't want to have more than one variable in the integral...    Let . Then we know that . This implies that Hmm... there is an extra factor of in the integrand... This is not good... Is there anyway that we can replace it in terms of ?   Yes there is! Recall we define . This implies that . We can now substitute with !   Ha! We do know how to evaluate this integral! Hence, we can still evaluate this integral with an extra factor of in the integrand!       Substitution Method for Definite Integrals   Evaluate the definite integral    There are actually two ways of approaching this problem and we will try both methods!   Method #1: Observe that this is a linear -sub so we can find an antiderivative of the integrand quickly. Let's use the FTC (find an antiderivative, plug in the limits of integration, and do the subtraction) and obtain the answer.   Method #2: Let's try using -sub formally! Obviously, here. The next step in -sub is to replace all the 's in terms of . So let's do it! In addition to the inside function and the differential that we need to replace in terms of , what else do we need to adjust?    Method #1: Using FTC directly  Observe that the inside function is a linear function with the slope of . Then we can find an antiderivative of the integrand quickly: Then by the Fundamental Theorem of Calculus, we obtain     Method #2: Using -sub (and then FTC)  If we want to use -sub, then obviously we should pick . This implies that Then after substitution, the integral will become . Did we successfully replace all the 's in terms of ?  The answer is no! There is one part that we forgot to adjust, which is the limits of integration ! Remember the limits of integration, and , are some values! Since our job now is to replace ALL the 's in terms of , this includes the limits of integration as well!   When ,     When ,    Hence, the correct integral we should obtain after -sub is   The resulting integral looks like something we can evaluate directly!       If is continuous on , and is continuous on the range of , then     What the theorem emphasizes is to adjust the limits of integration when changing the variable . Observe in the above example that we don't need to plug back if you adjust the limits of integration along with your -sub.   Evaluate the definite integral    We are in the -sub section so we probably can evaluate this integral using -sub. Then we will need to pick a first.  Observe that the numerator of the integrand is , which seems like the derivative of the inside function in the denominator, which is , if we neglect the constant multiple. So what is a good we can pick?  Once you pick your , make sure you replace all the 's in terms of and don't forget to adjust the limits of integration if you want to carry the in your computation.    Let . Then we have In addition, we also know that   when , ;    when , .   This implies that       Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following indefinite integral using methods covered in class so far.                                                Evaluate the following definite integral. Pay attention to the limits of integration if necessary.                   "
},
{
  "id": "sec57-uSub-2-2",
  "level": "2",
  "url": "sec57-uSub.html#sec57-uSub-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     evaluate indefinite integrals using -sub and rewrite the final answer in terms of .    recognize which integrals can be evaluated using -sub and which ones cannot be evaluated using -sub.    apply -sub in definite integrals by changing the limits of integration to match the new variable.    "
},
{
  "id": "sec57-uSub-3",
  "level": "2",
  "url": "sec57-uSub.html#sec57-uSub-3",
  "type": "Investigation",
  "number": "5.7.1",
  "title": "",
  "body": "  Recall we learned the chain rule back in calculus 1, which is a method to differentiate composite functions.  Let be a composite function. We can see that is the outside function and is the inside function. The chain rule says that    Note: I know that this notation is different from the typical and you saw back in calculus 1. I am using and to match up the typical calculus 2 notation but the idea is the same.     What is the derivative of of the function ?    Evaluate the indefinite integral    "
},
{
  "id": "thm-usub-indefinite",
  "level": "2",
  "url": "sec57-uSub.html#thm-usub-indefinite",
  "type": "Theorem",
  "number": "5.7.1",
  "title": "Substitution Method for Indefinite Integrals.",
  "body": " Substitution Method for Indefinite Integrals   If , and is a differentiable function whose range includes the domain of , then    "
},
{
  "id": "subsec-571-Indefinite-3",
  "level": "2",
  "url": "sec57-uSub.html#subsec-571-Indefinite-3",
  "type": "Example",
  "number": "5.7.2",
  "title": "",
  "body": " Evaluate the indefinite integral using the formula in the above theorem.   To use the formula, we need a composite function and the derivative of the inside function being multiplied as the integrand. So the two questions to consider here are:   What is a composite function that stood out to you? After you have identified a composite function, what is the outside function and the inside function?  Label the outside function as and the inside function as .     What is the derivative of the inside function, ? Can we find as a factor in the integrand?   After you found the components of the integrand and checked off the second question, try figuring out what is and obtaining the answer by plugging in each component to the formula.    There is only one composite function in the integrand, which is . Then we can label Observe that , which is a factor in the integrand. Then this integral matches up with the left-hand side of the formula in .  We know that Then we can plug in all these components to the formula and obtain the answer:    "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-3",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-3",
  "type": "Example",
  "number": "5.7.3",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall should be some inside function in a composite function. Then what is a composite function that stood out to you and what should the be?  After you determine what the is, try substituting ALL the 's in the indefinite integral with , including the differential . The resulting integral should be easier than the original integral in the prompt.    The composite function in the integrand is , with the inside function of . So let's pick . If we substitute for , then the integral becomes Sure the integral becomes a bit easier. But this is also a super confusing integral since it includes TWO different variables, and .  One way to resolve this confusion is to replace ALL the 's in terms of 's. The hardest substitution here is the differential, ... How do we replace the in terms of ...  One expression that contains both and is the derivative of with respect to . Recall we defined . Then If we abuse the notation a bit by treating the derivative notation as a fraction, we can multiply the on both sides of this equation. Then we obtain Hmm the looks super familiar... They are also part of the integral! Hence, we can substitute with as follows: Now there is only one variable, , in the integral and we for sure know how to evaluate this integral! Using the power rule, we know that Don't forget that is essentially . We can obtain the final answer by replacing back for .    "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-7",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-7",
  "type": "Example",
  "number": "5.7.4",
  "title": "",
  "body": " Evaluate the indefinite integral    We are learning -sub so we probably can evaluate this integral using -sub. Recall we pick to be some inside function of a composite function. What is a we can pick here?    There are more than one composite functions so there are more than one choice of we can pick.  Richard will pick (and he has a good reason). He will work through the problem and let's see if you can figure out what this good reason is.  Let . To find the , we will need to take the derivative of with respect to . Then we obtain Observe that we can find in the integral, which equals to by the above equation. Substituting and in the integral, we obtain    "
},
{
  "id": "note-isolate-dx-usub",
  "level": "2",
  "url": "sec57-uSub.html#note-isolate-dx-usub",
  "type": "Note",
  "number": "5.7.5",
  "title": "Can we isolate <span class=\"process-math\">\\(\\boldsymbol{dt}\\)<\/span> in the above example?",
  "body": " Can we isolate in the above example?  Recall the substitution Richard used in the previous example is to replace by based on the equation A natural follow-up question here is whether we can isolate the entirely and replace to the integral as follows: It seems like this \"divide-and-cancel\" method will lead us to the same answer anyways, so is this a valid method?  Well I guess it all depends on how much you care about the rigor in math. If all you care about is to obtain an answer, then by all means. This method will work 90% of the time (I know it sounds sarcastic but it is really not...).  But if you do care about the rigor in math (like Richard), then this method should be bugging you because the divisor, , could potentially be zero here since is in the domain of the integrand. In math, we never want to divide something that could potentially be zero. So dividing a variable before verifying it can never be zero is a bad idea.  An example I always use if I am teaching algebra and precalculus at PCC is to solve the equation by dividing an on both sides of the equation. While we obtain a solution indeed through the division of , we also miss the solution of .  I probably won't give you any questions in this extreme that the \"divide-and-cancel\" method will lead to the loss of some solution (because this isn't a differential equation class). So I will leave it up to you if you want to use this \"divide-and-cancel\" method. At least there is no harm in this class (I think...).  "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-11",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-11",
  "type": "Example",
  "number": "5.7.6",
  "title": "",
  "body": " Evaluate the indefinite integral    Let's evaluate this integral using -sub. Recall a good choice of is the ones that you can find its derivative as a factor of the integrand. So what is a good choice of ?    There is only one composite function in the integrand, which implies that the , aka the only inside function, should be .  Let . To replace in terms of , we will differentiate with respect to . Then we obtain     Linear -sub  Recall (blahblahblah)  Now let's try the following problem and see if you can obtain the answer quickly .   Evaluate the indefinite integral    Observe that the inside function, which we can for sure call it , is a linear function. Then what is the slope and how can we obtain the answer quickly without going through all the work for -sub?    Observe that the inside function, , is a linear function with the slope of . Then we can divide the slope, integrate the outside function, and plug in the inside function (and don't forget the ).    If this line of work doesn't convince you, then I would suggest you working out this problem using -sub and observe how the answer can be obtained quickly.      "
},
{
  "id": "subsubsec-5711-sub-usingDifferential-13",
  "level": "2",
  "url": "sec57-uSub.html#subsubsec-5711-sub-usingDifferential-13",
  "type": "Example",
  "number": "5.7.9",
  "title": "",
  "body": " Evaluate the indefinite integral    Observe that there is a composite function in the integrand with the inside function of . Based on our previous strategy, we should be calling it .  Let's try picking to be the inside function and see what will happen.  If you are ready to give up or open to another method, try picking and see if it will work out nicely.    Choice #1: Let   This will work out but the work is a bit more complicated since you will need to -sub it twice.   Let . Then we have This implies that Okay... we are able to replace all the 's with 's and the integral is a bit easier (see that there is no more trigonometric functions in the integrand). But this is kind of discouraging since there is no formula to help us integrate this function...  To proceed, we will need to do another -sub by letting . Then This implies that Ha! We evaluated the integral! We will just need to put everything together and replace back the variable to .     Choice #2: Let  Let's follow Richard's hint and let . Then we have This implies that    Observe that this choice of made the process a lot easier .   "
},
{
  "id": "Strategy-Pick-u",
  "level": "2",
  "url": "sec57-uSub.html#Strategy-Pick-u",
  "type": "Note",
  "number": "5.7.10",
  "title": "How do I know what is the <span class=\"process-math\">\\(\\boldsymbol{u}\\)<\/span> I should pick?",
  "body": " How do I know what is the I should pick?  For starters, we can pick whatever in the integrand to be the . But whatever you pick, you want to make sure two things:   All the variables should be turned to (or whatever the new variable is), including the differential, and    the new integral after the substitution should be easier to evaluate compared to the original integral.   If your choice of doesn't do the above two things, then this is a bad and you should either pick another or try a different method.   But there is a difference between picking a good and picking the most efficient ...  The above example should demonstrate the difference. The first choice of is a good but is not the most efficient option, while the second choice of is the most efficient since we were able to evaluate the integral right after the substitution.  So I guess the next question here is how to pick the most efficient ... Well it actually takes a bit guess-and-check-ing and experience. I will encourage you to first practice on how to pick a good  to make sure at least you can solve the problem. When you are comfortable and proficient at using -sub, then knowing what the most efficient will come naturally.  "
},
{
  "id": "subsec-572-limitation-3",
  "level": "2",
  "url": "sec57-uSub.html#subsec-572-limitation-3",
  "type": "Example",
  "number": "5.7.11",
  "title": "",
  "body": "  Determine whether we can evaluate the following integral using -sub. If so, do it. If not, why not?        A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We can evaluate this integral using -sub (or even easier if you can observe that the inside function is a linear function).  Let . Then we have This implies that          A good strategy is to pick the to be some inside function of a composite function. The outside function here is for sure , then what is the inside function we can pick for ?    We cannot evaluate this integral using -sub because we won't be able to group the out of it. But let's try using -sub nevertheless and see where we will get stuck.  Let . Then we have Yet there is no extra factor of in the integrand that we can group together with to give us a out of it. So we are stuck...   if you are thinking of using the \"divide-and-cancel\" method...  You may consider isolating the as follows and substitute as follows: Well the resulting integral after the substitution still contains two variables (since there is not a factor of in the integrand to cancel the in the denominator with).  Well one way to resolve this issue is to figure out what is in terms of (by isolating in the equation of ).  Observe that . Then the resulting integral becomes See that the integral doesn't become easier... This should be a cue that -sub doesn't work. We should give up and try something else.     Fun fact about this integral  It turns out that there is no elementary function    "
},
{
  "id": "subsec-572-limitation-6",
  "level": "2",
  "url": "sec57-uSub.html#subsec-572-limitation-6",
  "type": "Example",
  "number": "5.7.14",
  "title": "",
  "body": " Evaluate the indefinite integral    There is an inside function screaming to us, which is . Let's pick this as our . But what about the extra factor of ... We for sure don't want to have more than one variable in the integral...    Let . Then we know that . This implies that Hmm... there is an extra factor of in the integrand... This is not good... Is there anyway that we can replace it in terms of ?   Yes there is! Recall we define . This implies that . We can now substitute with !   Ha! We do know how to evaluate this integral! Hence, we can still evaluate this integral with an extra factor of in the integrand!    "
},
{
  "id": "subsec-573-Definite-2",
  "level": "2",
  "url": "sec57-uSub.html#subsec-573-Definite-2",
  "type": "Example",
  "number": "5.7.15",
  "title": "",
  "body": " Evaluate the definite integral    There are actually two ways of approaching this problem and we will try both methods!   Method #1: Observe that this is a linear -sub so we can find an antiderivative of the integrand quickly. Let's use the FTC (find an antiderivative, plug in the limits of integration, and do the subtraction) and obtain the answer.   Method #2: Let's try using -sub formally! Obviously, here. The next step in -sub is to replace all the 's in terms of . So let's do it! In addition to the inside function and the differential that we need to replace in terms of , what else do we need to adjust?    Method #1: Using FTC directly  Observe that the inside function is a linear function with the slope of . Then we can find an antiderivative of the integrand quickly: Then by the Fundamental Theorem of Calculus, we obtain     Method #2: Using -sub (and then FTC)  If we want to use -sub, then obviously we should pick . This implies that Then after substitution, the integral will become . Did we successfully replace all the 's in terms of ?  The answer is no! There is one part that we forgot to adjust, which is the limits of integration ! Remember the limits of integration, and , are some values! Since our job now is to replace ALL the 's in terms of , this includes the limits of integration as well!   When ,     When ,    Hence, the correct integral we should obtain after -sub is   The resulting integral looks like something we can evaluate directly!    "
},
{
  "id": "thm-usub-definite",
  "level": "2",
  "url": "sec57-uSub.html#thm-usub-definite",
  "type": "Theorem",
  "number": "5.7.16",
  "title": "",
  "body": "  If is continuous on , and is continuous on the range of , then    "
},
{
  "id": "subsec-573-Definite-5",
  "level": "2",
  "url": "sec57-uSub.html#subsec-573-Definite-5",
  "type": "Example",
  "number": "5.7.17",
  "title": "",
  "body": " Evaluate the definite integral    We are in the -sub section so we probably can evaluate this integral using -sub. Then we will need to pick a first.  Observe that the numerator of the integrand is , which seems like the derivative of the inside function in the denominator, which is , if we neglect the constant multiple. So what is a good we can pick?  Once you pick your , make sure you replace all the 's in terms of and don't forget to adjust the limits of integration if you want to carry the in your computation.    Let . Then we have In addition, we also know that   when , ;    when , .   This implies that    "
},
{
  "id": "ws-sec57-3-2",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-3",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-4",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-5",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-6",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-3-7",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-3-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-4-2",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-4-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec57-4-3",
  "level": "2",
  "url": "sec57-uSub.html#ws-sec57-4-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "sec58-FurtherIntegralFormulas",
  "level": "1",
  "url": "sec58-FurtherIntegralFormulas.html",
  "type": "Section",
  "number": "5.8",
  "title": "Further Integral Formulas",
  "body": " Further Integral Formulas   In this section, you will undo even more derivative formulas you learned back in calculus 1 in terms of integrations.    After this section, students will be able to:     integrate using integral formulas involving inverse trigonometric functions        Evaluate the indefinite integral     Can we evaluate this integral using -sub?   We can certainly try using -sub and see if it will work out. Recall -sub undoes the chain rule for derivative, which is a method to differentiate a composite function. Typically, is some inside function in some composite function.  There are two choices of as an inside function you can pick. Try them! Will they work out? If not, what seems to be the issue?    Choice #1: Let  We cannot use -sub here. There are many issues that needs to be resolved in order to make progress... And  If we pick . Then , which implies that . But there is no factor of in the integrand that allows us substitute with . So we will get stuck here...  A possible way to resolve this issue is to isolate the entirely by dividing the to the other side (and pretending can never be zero). This implies that . By this substitution, we obtain Okay... but there is still an in the integrand. This is super confusing since the variable we are dealing with now is , not . Given our substitution that , we see that . Then the integral becomes Wow... the integral doesn't get easier after all this hard work... This should be an indicator to search for another method to evaluate this integral . -sub should make the integral easier to deal with, not harder.  If you are feeling a bit adventurous and want to continue with this line of work (to see if it will work out eventually), the next step will be to make another substitution by letting . Then and . Then we obtain Observe that this integral is almost the same as the integral given in the prompt, which means we looped back to the problem after all the hard work... Another way of saying this is that this method is inconclusive...    Choice #2: Let  Richard can tell right ahead that this choice of is also inconclusive (it will loop you back to the problem as well) due to his awesome math skills. But just in case he didn't lose his mind, he will present the work (and also convince himself that he is still young and he can do the math in his head).  Let . Then , which implies that We obtain Observe that this integral is (again) almost the same as the integral given in the prompt. We (again) looped back back to the problem after the hard work...     Evaluate this integral not using -sub, but using the hint given below.   This may seem like a totally irrelevant hint but what is the derivative of You learned this back in calculus 1 so feel free to look up your notes.   Clarifying the notation  The function means the inverse sine of .  Another famous notation for inverse sine is . Be careful with this exponent of . This doesn't mean the reciprocal of .  I will use both notations interchangeably.     Recall back in calculus 1, we learned about the derivative of inverse trigonometric function. One of the formulas is In other words, we can rewrite the above formula using integration as follows: Hence, we can evaluate this integral as follows:      Recall we learned a couple formulas about taking the derivative of the inverse trigonometric functions back in calculus 1. If we rewrite these formulas, we will obtain more formulas to help us evaluate integrals.   Integral formulas involving inverse trigonometric functions  Back in calculus 1, you learned the derivative of the six inverse trigonometric functions. Of course we can rewrite the six derivative formulas into the three integrals formulas in the following theorem.   Integrals Involving Inverse Trigonometric Functions          Why do we only rewrite three of the six derivative formulas?      Evaluate the indefinite integral    The bad news here is that we cannot simplify the fraction (there is nothing we can cancel here)...  You may try using -sub and it will work out if you use it smartly.  Here is Richard's hint: before using -sub, try splitting up the fraction as follows: Do we know how to integrate each term?    Using Richard's hint and linearity, we know that   Observe that there is a formula in we can use directly to evaluate the first integral. Hence, the first integral can be evaluated as follows:   For the second integral, we can evaluate it using -sub. Let . Then , and hence . This implies that   Putting these two pieces together, we obtain     One thing you may notice from the previous example is that   Evaluate the definite integral          Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following indefinite integral using methods covered in class so far. Note that the two problems are similar. Are the answer also similar?                   "
},
{
  "id": "sec58-FurtherIntegralFormulas-2-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#sec58-FurtherIntegralFormulas-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     integrate using integral formulas involving inverse trigonometric functions    "
},
{
  "id": "sec58-FurtherIntegralFormulas-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#sec58-FurtherIntegralFormulas-3",
  "type": "Investigation",
  "number": "5.8.1",
  "title": "",
  "body": "  Evaluate the indefinite integral     Can we evaluate this integral using -sub?   We can certainly try using -sub and see if it will work out. Recall -sub undoes the chain rule for derivative, which is a method to differentiate a composite function. Typically, is some inside function in some composite function.  There are two choices of as an inside function you can pick. Try them! Will they work out? If not, what seems to be the issue?    Choice #1: Let  We cannot use -sub here. There are many issues that needs to be resolved in order to make progress... And  If we pick . Then , which implies that . But there is no factor of in the integrand that allows us substitute with . So we will get stuck here...  A possible way to resolve this issue is to isolate the entirely by dividing the to the other side (and pretending can never be zero). This implies that . By this substitution, we obtain Okay... but there is still an in the integrand. This is super confusing since the variable we are dealing with now is , not . Given our substitution that , we see that . Then the integral becomes Wow... the integral doesn't get easier after all this hard work... This should be an indicator to search for another method to evaluate this integral . -sub should make the integral easier to deal with, not harder.  If you are feeling a bit adventurous and want to continue with this line of work (to see if it will work out eventually), the next step will be to make another substitution by letting . Then and . Then we obtain Observe that this integral is almost the same as the integral given in the prompt, which means we looped back to the problem after all the hard work... Another way of saying this is that this method is inconclusive...    Choice #2: Let  Richard can tell right ahead that this choice of is also inconclusive (it will loop you back to the problem as well) due to his awesome math skills. But just in case he didn't lose his mind, he will present the work (and also convince himself that he is still young and he can do the math in his head).  Let . Then , which implies that We obtain Observe that this integral is (again) almost the same as the integral given in the prompt. We (again) looped back back to the problem after the hard work...     Evaluate this integral not using -sub, but using the hint given below.   This may seem like a totally irrelevant hint but what is the derivative of You learned this back in calculus 1 so feel free to look up your notes.   Clarifying the notation  The function means the inverse sine of .  Another famous notation for inverse sine is . Be careful with this exponent of . This doesn't mean the reciprocal of .  I will use both notations interchangeably.     Recall back in calculus 1, we learned about the derivative of inverse trigonometric function. One of the formulas is In other words, we can rewrite the above formula using integration as follows: Hence, we can evaluate this integral as follows:     "
},
{
  "id": "thm-IntegralInvolvingInverseTrig",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#thm-IntegralInvolvingInverseTrig",
  "type": "Theorem",
  "number": "5.8.2",
  "title": "Integrals Involving Inverse Trigonometric Functions.",
  "body": " Integrals Involving Inverse Trigonometric Functions        "
},
{
  "id": "subsec-581-Integral-InverseTrig-4",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-4",
  "type": "Note",
  "number": "5.8.3",
  "title": "Why do we only rewrite three of the six derivative formulas?",
  "body": " Why do we only rewrite three of the six derivative formulas?    "
},
{
  "id": "subsec-581-Integral-InverseTrig-5",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-5",
  "type": "Example",
  "number": "5.8.4",
  "title": "",
  "body": " Evaluate the indefinite integral    The bad news here is that we cannot simplify the fraction (there is nothing we can cancel here)...  You may try using -sub and it will work out if you use it smartly.  Here is Richard's hint: before using -sub, try splitting up the fraction as follows: Do we know how to integrate each term?    Using Richard's hint and linearity, we know that   Observe that there is a formula in we can use directly to evaluate the first integral. Hence, the first integral can be evaluated as follows:   For the second integral, we can evaluate it using -sub. Let . Then , and hence . This implies that   Putting these two pieces together, we obtain    "
},
{
  "id": "subsec-581-Integral-InverseTrig-7",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#subsec-581-Integral-InverseTrig-7",
  "type": "Example",
  "number": "5.8.5",
  "title": "",
  "body": " Evaluate the definite integral       "
},
{
  "id": "ws-sec58-3-2",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec58-3-3",
  "level": "2",
  "url": "sec58-FurtherIntegralFormulas.html#ws-sec58-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
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
  "body": " Integration by Parts   In this section, you will learn a method to evaluate integrals called the Integration by Parts , which is derived from the Product Rule from derivatives.    After this section, students will be able to:     apply the integration by parts formula to evaluate integrals.    pick the that will make the process easier.        How would you evaluate the integral     Math would be so much easier if we could just take the integral of the two functions in the integrand separately. So let's do it! What would be the answer if we were to integrate each factor separately?   If we were to integrate each function separately, then we would obtain      Now check the answer you got from part (a). Is this a correct antiderivative of ?   If were the general antiderivative of , then it would imply that Yet, by the Product Rule of derivative, we know that See that the derivative of clearly doesn't equal to the integrand. Hence, we know that is NOT the general antiderivative of .   So we know that our method of integrating the function by integrating each factor separately is incorrect.      Then what is the correct answer to this integral?   This may seem like a totally irrelevant hint but what is the derivative of     Let's take the derivative of the function given in the hint. This implies that is an antiderivative of .  Recall that all antiderivatives of a function only differ by a constant (that is why we needed the to denote the general antiderivative). Hence, we know that      See that we can't just simply integrate each factor of the integrand when integrating a factor of two functions. We will need a new method that allows us to integrate a product of two functions.   Formula to integrate the product of two functions  Recall we learned a fancy formula, called the product rule, to take the derivative of a product of two functions back in calculus 1. For demonstration purposes, let's call these two functions and . If we wanted to take the derivative of , then the product rule tells us that If we want to spin this around using calculus 2 language about antiderivatives, then we can say that is an antiderivative of . Symbolically, this means that By the linearity of integral and a bit of the abuse of notation to treat the derivative symbols as fractions, we will obatin This is the equation we obtained.   You may be wondering... why talking about derivatives at all? Isn't the purpose of this section to come up with a way to integrate the product of two functions?  Well the magic comes when we subtract the on both sides of the equation. We will then obtain This is our formula to integrate the product of two functions! The name of this formula is called the Integration by Parts !   Integration by Parts Formula (indefinite version)        You may also wonder why we call this formula \"integration by parts \". That is because we didn't fully integrate the integrand using this formula. After using this formula, there is still a resulting integral that needs to be evaluated. So technically speaking we only integrated parts of the integrand using this formula and we need to do more work to evaluate the resulting integral.    Integration by Parts (Indefinite Version)  Now we have a fancy formula to help us integrate the product of two functions. Let's look at a couple examples on how to use this formula.   Evaluate the indefinite integral    Notice that the left-hand side of the integration by parts formula says . To use this formula, we will need to first determine what and are.    Let's pick , which is one of the factor in the integrand. Then the is forced to be .  Observing the integration by parts formula, we also need to know what and are in order to use this formula.  We can obtain by taking the derivative of . That is,   To obtain , we can integrate . That is,   To sum up, we have the following components:   We can now put all the components together using the integration by parts formula. Using the integration by parts formula results in an easier integral that we can deal with!  Now we put everything together, we can evaluate the integral as follows.     Notice that we will still end up with an integral to deal with after using the integration by parts formula. That is, this method is useful only if the resulting integral is easier to evaluate (or at least not more complicated than the original integral).  Strategically speaking, we want to pick a such that    is simpler than itself; and    we can actually integrate .     But that doesn't really answer the question on how to pick the strategically to make the process work out (and\/or make the problem easier). There is a \"LIPET\" test to help us pick a good . LIPET is an acronym that tells us how we should pick the in the following order:    L stands for Logarithmic functions;     I stands for Inverse Trigonometric functions;     P stands for Power functions;     E stands for Exponential functions;     T stands for Trigonometric functions;   Well... Exponential and Trigonometric functions are equally complicated when picking them to be the ...   Evaluate the indefinite integral    We are in the section of integration by parts so this is probably the method we should use to evaluate this integral.  In order to use the integration by parts formula, we will need to pick a and let the rest of the integral be the . What type of functions are we seeing in the integrand and which one should we pick to be the by the LIPET test?    Notice that there is a power function and a logarithmic function in the integrand. By the LIPET test, we should pick to be the logarithmic function.  Let . Then we have Using the integration by parts formula, we obtain     But... can we pick if we are feeling a bit rebellious and don't want to follow the LIPET test in the previous example? The short answer is that it depends... If we pick in the previous example, then the will be forced to be and we actually don't know what the indefinite integral of is yet (so we would get stuck in the setup when finding the ).  We will integrate in the next example. When you know what the indefinite integral of is, I encourage you to try picking in the previous example and see how much more work you need to deal with. Then you will realize that the LIPET test does save us a lot of work.   Evaluate the indefinite integral    Since we are in the section of integration by parts, this is probably going to be the method we are using in this problem.  Yet there is only one single function in the integrand... We have to pick a function to be and let the rest of the integral to be ... What choice of the function do we have as our ?    Well there is only one function in the integrand so this is going to be our only choice of ...  Let . Then we have Using the integration by parts formula, we obtain     Now we have one more formula that can go into your integral formula sheet!   Integral of the Natural Logarithmic Function        A question you may have now is whether we can always evaluate the resulting integral easily .  The short answer is no. The resulting integral is just another regular integral that may need to be evaluated using fancy methods.  But a rule of thumb here is that the resulting integral should NOT be more complicated than the original integral . We don't want to make the problem even worse to deal with.   Evaluate the indefinite integral    The method we should use to evaluate this integral will be integration by parts (we are covering this section now!). Then we will need to pick a and let the rest of the integral be the . By the LIPET test, what should we pick for the ?    Notice that there is a power function and a trigonometric function in the integrand. By the LIPET test, we should pick to be the power function.  Let . Then we have Using the integration by parts formula, we obtain   Now let's observe the resulting integral . This integral looks super familiar! We knew this indefinite integral equals to back from the investigation in this section!   If this observation isn't obvious, we can always evaluate this integral using integration by parts again.   This implies that     In the above example, notice that the resulting integral is still a bit complicated in the sense that you need to use the integration by parts (if you didn't make the observation about the investigation). But the good news is that this resulting integral is easier compared to the original integral because we have successfully removed the square from it.   Evaluate the indefinite integral    You may find a pattern here that using integration by parts will chip away the power one at a time. Then how many times do we need to use the integration by parts to evaluate this integral fully?    We will need to use the integration by parts formula three times to fully evaluate this integral. It is kind of tedious to do the same thing three times in a row (feel free to try it out if this sounds like a good challenge for you!).  Instead, we will evaluate this integral using a shortcut called the tabular method . As the name of this method suggests, this is a method that tracks the (and its derivatives) and the (and its antiderivatives) in a table.  We will set up the table as follows:   The first column consists of alternating signs (mainly because of the minus sign in the formula);    The secound column consists of and its consecutive derivatives until it reaches ;    The third column consists of and its consecutive antiderivatives until it reaches the row containing as the consecutive derivatives of .     Then the answer will be the sum of the product of cells connecting by the arrows.  As an example, below is the table constructed to evaluate the integral given in the prompt:     Sign                                              Then the answer is      But Richard... What if the resulting integral is equally complicated as the original integral... Well the good news is that we can sometimes deal with this case using a smart trick, which is to treat the evaluation process as an equation (this will allow us to solve for the integral).   Evaluate the indefinite integral    Notice that there are two functions being multiplied together in the integrand, which is an exponential function and a trigonometric function. By the LIPET test, which one should we pick to be the and what the is?    It turns out that it doesn't matter which function we pick to be our and the problem is equally complicated. For demonstration purposes, let's follow the LIPET test and pick to be the exponential function. I will encourage you to solve this problem again by picking the to be the trigonometric function. Then you can compare and contrast the work (they are mostly the same anyways).  Let . Then we have Using the integration by parts formula, we obtain   Hmm the resulting integral seems equally complicated in the sense that we still have an exponential function and an trigonometric function in it (but the only difference is that the became an ).  Let's try using the integration by parts formula again to the resulting integral and see if it will lead us somewhere.  Let . Then we have Using the integration by parts formula, we obtain   Let's put everything together, and we obtain the following   Well the resulting integral ended up being the same as the original integral. So we are in a loop using the integration by parts. Does it mean this problem is unsolvable and we just have to give up?  Of course not! Richard is coming to your rescue! Richard is feeling lazy and he doesn't want to keep on writing (or in this case, tying) the integral all the time, so he will just call it . That is, let's define Then the last line of our work will become the following equation : Remember the goal here is to figure out what is. This seems like an equation that we can totally solve for .  Adding on both sides and then divide both sides of the equation by 2, we obtain This implies that   Ha! We did it! We evaluated the integral!    Observe that the trick in the previous example is to treat the integral as a variable and solve for it if the integration by pats loops you back to the same integral .    Integration by parts OR -sub?  Now that we have learned two fancy methods to evaluate integrals, integration by parts and -sub. How do I know which one I should use when evaluating integrals?   Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    Probably not a very useful hint...  Trust your gut and just pick one! If the method you picked doesn't work, then try the other one! Be bold! This is just a math question, not a life or death situation!    Let's try using the integration by parts first since we are covering this section now. I am seeing a power function and a trigonometric (ish) function being multiplied in the integrand. By the LIPET test, I will pick , which implies that .  Hmm but I am stuck now since I don't know what is... (and it turns out that we can't integrate anyways...). But that's okay! At least we can rule out a bad method!  Now let's try using -sub here. Let . Then , which implies that . We obtain      Determine which method, integration by parts or -sub, is applicable to the following indefinite integral    I am going to be bold and try using the integration by parts again. By the LIPET test, we will pick to be .  Let . Then we have Using the integration by parts formula, we obtain Hey! The resulting integral is easier and we actually know what the integral of is! We found it out in one of the previous examples. Using the result from that example, we obtain   We just picked a method and it works out after all! Yay!    I am sure some of you can find some patterns here. We will summarize all the methods and some strategies to evaluate integrals later in so I won't go too in dept in this section.  The takeaway message here is to be bold and pick a method. Don't be afraid to switch methods if one doesn't work (or when you get stuck).    Integration by Parts (Definite Version)  There is not much to say in this part since the only additional step to do here is to plug in the limits of integration and do the subtraction...  Remember that the variable doesn't change when using the integration by parts formula (the variable remains to be throughout the whole process) so we don't need to adjust the limits of integration.   Integration by Parts Formula (definite version)        We will wrap up this section by looking at an example of evaluating a definite integral using integration by parts.   Evaluate the definite integral    This is similar to one of the previous examples that there is only one function in the integrand... So there is only one choice we have for our ...    Our only choice of is the ...  Let . Then we have Using the integration by parts formula, we obtain   Recall we evaluated the resulting integral back in using -sub. For your convenience, I will include the result below:   This implies that       Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Evaluate the following indefinite integral using integration by parts .                                  Evaluate the following indefinite integral using multiple methods indicated in the hint below.   P.S.: I encourage you to try evaluating the following integral in a different way (be rebellious and adventurous a bit). We will talk about strategies in evaluating integrals in where one of the important idea is that there may be multiple strategies to evaluate an integral.         Use integration by parts first and then -sub.           Use -sub first and then integration by parts.        Evaluate the following definite integral. Make sure your notation is clear and correct.                   "
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
  "body": " Some Famous Applications of Integrals  Text of section.   A physics and engineering application -- Work    Inline Final PDF (Test)   Scroll the PDF below or use the download link.   Final Exam PDF (inline viewer + download)   <iframe src=\"external\/pdfs\/MTH252_Su25_Final.pdf\" width=\"100%\" height=\"800\" style=\"border:0\" title=\"Final Exam PDF\" ><\/iframe>  Download the PDF: Final Exam (PDF)      "
},
{
  "id": "fig-final-exam",
  "level": "2",
  "url": "secA3-ApplicationIntegral.html#fig-final-exam",
  "type": "Figure",
  "number": "A.3.1",
  "title": "",
  "body": " Final Exam PDF (inline viewer + download)   <iframe src=\"external\/pdfs\/MTH252_Su25_Final.pdf\" width=\"100%\" height=\"800\" style=\"border:0\" title=\"Final Exam PDF\" ><\/iframe>  Download the PDF: Final Exam (PDF)   "
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
