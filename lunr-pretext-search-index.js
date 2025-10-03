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
  "body": " Approximating and Computing Area   The big question in this section is how to approximate the area under the curve of a function . We will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation        Let's find the area under the curve of some simple-looking functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the base of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is      These problems are easy if the region of interest is a known geometric figure... But things are not always so nice... We will need a way to find (or at least approximate) the area under the graph of any function.   Approximating Area by Rectangles  If the region under the curve doesn't look like a known geometric figure, then we can't find the area by searching an area formula we learned before. Before thinking about finding the precise area under the curve, let's come up with a method to approximate the area.  One tool we have in our toolkit is to split the region into a bunch of rectangle strips and we can approximate the area by summing the area of these rectangle strips.   Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.    Observe that Richard made a choice of aligning the upper left corner of each rectangle on the curve when he constructed his three rectangles. Let's give this method of approximation a fancy name! This is called the left-endpoint approximation . Notationally speaking, we can represent this approximation by (left-endpoint approximation using three rectangles).  You may be wondering if we can align the upper right corner of each rectangle on the curve when you construct the rectangle... We certainly can! Let's try the same problem but with a slightly different way of constructing the rectangles!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.    Similarly, we can name this method the right-endpoint approximation ! Notationally speaking, we can represent this approximation by (right-endpoint approximation using three rectangles).  We can actually make it even more fancier by aligning the midpoint of each rectangle on the curve when you construct the rectangle! There are pros and cons to make the method fancier. Let's try the same problem with this slightly fancier method and see what the pros and cons are!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .    Again, we can name this even fancier method the midpoint approximation! You can imagine that we can represent this approximation by (midpoint approximation using three rectangles).  You can observe that the midpoint approximation will give a better approximation compared to the left- and the right- endpoint approximation (this is a pro). But the tradeoff here is that the height of each rectangle is a bit more complicated to obtain (this is a con).  When you are approximating something, you usually will need to make a choice between computational power and the accuracy of the approximation . Easier methods will give a less-accurate approximation and more-complicated methods will give a more-accurate approximation.   Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.    Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,     Let's generalize the process! Let's say we want to approximate the area under the graph of on the interval using equal-width rectangles. Then the width of each rectangle is Furthermore, let's index our 's such that and . Then we can approximate the area under the curve as follows:   We can approximate the area once we can partition the interval and figure out the values of all the 's, where is the index. Then we don't have to graph the functions and construct all the rectangles.    Summation Notation  You may get the feeling that there is a pattern in the formulas above. We are adding similar things together. Sometimes it is kind of tedious to write out all the -- addends when the addends are similar with a pattern. Actually we have a special notation in math we can use to add things up with a pattern.     The sum of numbers ( ) is denoted where the greek letter (capital sigma) stands for the sum . denotes the index, the below the denotes the starting value of , and the above the denotes the index ends at .      Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain     Using the summation notation, we can rewrite the formulas for , , and more briefly.          But Richard... why introducing another fancy symbol of to make the formulas even more fancier-looking? Well there are several reasons... One of the reasons we care about in this section is that we can actually insert this to Desmos calculator and let it do the work for you (as opposed to you figuring out all the area of the rectangle stripes... not that you can't do it this way).  Another reason is that we can actually do some manipulation with it (e.g., find the limit of it when we have infinitely many rectangles!) if we want to increase the precision of our apprpoximation. This is A BIG IDEA in integral calculus that we will discuss in the next section!  This is just a quick preview. For those of you who are thinking about taking MTH 253Z Sequences and Series. Guess what a series is! Series, roughly speaking, is the sum of a bunch of things so you will definitely see the all over the place in MTH 253Z.   Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image       Computing Area as the Limit of Approximation  Now that we know how to approximate the area under the curve using rectangles. Then the next natural question here is how to make our approximation better and better.  One thing we can do is to increase the number of rectangle strips . That is, we want to increase the value of in the approximation methods. As is getting larger, this will force the width of each rectangle, , to be smaller and smaller. In other words,   In the following applet, you can see that the apprpoximation is closer and closer to the actual area if we increase the values, regarless of which approximation methods we used .   That is, the actual area can be computed using the limit of our approximation. Let's make it a cool theorem!     If is continuous on , then the left-endpoint, right-endpoint, and the midpoint approximation approches the same limit as . In other words, there is a value of such that If on , then is the area under the graph of on .      But Richard... how can we actually split up the region into infinite number of rectangle strips and find the area of all the strips... This seems impossible to do in practice...  You are correct that this is impossible to achieve in practice... The best we can do is to make our approximation better and better until we are happy about the value (life isn't perfect. how surprising...).  But this is a math class (so we are living in an ideal world where we can assume a lot of things!). If we are given the function, then we actually can compute the actual value of the area under the curve within some interval. This is a central idea of this class.   We are actually ready to formalize these approximation methods in the next section. But if you are feeling a bit of adventurous and devoted to figuring out this limit idea algebraically , feel free to keep reading the next part.    Limit of the approximation algebraically  Recall we can express the sum using the summation notation . Let's do some quick practice to remind us of how it works.   Write out the following summation notation and evaluate it.                                   There are some properties of the summation notation we can use to make our computation easier.    Properties of Summation Notation            for any constant      for any constant         Using these above properties, we can break down a complicated summation notation into smaller pieces (so we can deal with one piece at a time).  There are also three well-known formulas, called the power sums formulas, that tells us the summation of the first integers with powers.    Power Sum Formulas   Let be a natural number. Then                      There are more power sum formulas but they are the most famous three. Rather than actually adding up the numbers, these formulas allow us to compute the sum by plugging in directly.  Let's compute the actual area of some functions algebraically using the summation notation!   Let . Find the actual area under the graph of over the interval , where algebraically.   By , we know that the actual area can be computed by taking the limit of as . Then what is using summation notation?  After you figure out what is, take the limit of it as .    We will let to be the number of rectangle strips. Then the width of each rectangle is Using the summation notation formula for , we obtain   To obtain the actual area, we want to take the limit of as . Then we obtain   What this tells us here is that the area under the graph of over the interval is .    Later in the term, we will derive these formulas to compute the area more efficiently (thanks to FTC!).    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Consider the function on the interval .   Graph the function and highlight the region of interest.    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?         Approximate the area under the graph of the function from to using .      Let . Find , , and on the interval .      Approximate the area under the curve on using four subintervals. The graph of the curve is given below.   The graph of the curve        What is the and in this problem?    Approximate the area using the right-endpoint approximation.    Approximate the area using the left-endpoint approximation.    Approximate the area using the midpoint approximation.        Explain graphically that if is linear on the interval , then the area under the graph on is for all . Don't forget to explain in words what your diagram tells us.     "
},
{
  "id": "sec51-ApproximatingArea-2-2",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#sec51-ApproximatingArea-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation    "
},
{
  "id": "sec51-ApproximatingArea-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#sec51-ApproximatingArea-3",
  "type": "Investigation",
  "number": "5.1.1",
  "title": "",
  "body": "  Let's find the area under the curve of some simple-looking functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the base of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is     "
},
{
  "id": "subsec-511-Approximate_Rectangle-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-4",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-7",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-10",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-10",
  "type": "Example",
  "number": "5.1.9",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .   "
},
{
  "id": "subsec-511-Approximate_Rectangle-14",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-14",
  "type": "Note",
  "number": "5.1.11",
  "title": "Why do I have to approximate the area using rectangles?",
  "body": " Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.  "
},
{
  "id": "subsec-511-Approximate_Rectangle-15",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-15",
  "type": "Example",
  "number": "5.1.13",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,    "
},
{
  "id": "subsec-512-SummationNotation-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum sum "
},
{
  "id": "subsec-512-SummationNotation-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-4",
  "type": "Example",
  "number": "5.1.16",
  "title": "",
  "body": " Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain    "
},
{
  "id": "subsec-512-SummationNotation-11",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-11",
  "type": "Example",
  "number": "5.1.17",
  "title": "",
  "body": " Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image    "
},
{
  "id": "thm-Area-LimitofApproximation",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-Area-LimitofApproximation",
  "type": "Theorem",
  "number": "5.1.19",
  "title": "",
  "body": "  If is continuous on , then the left-endpoint, right-endpoint, and the midpoint approximation approches the same limit as . In other words, there is a value of such that If on , then is the area under the graph of on .   "
},
{
  "id": "subsec-514-LimitSummation-2",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summation notation "
},
{
  "id": "subsec-514-LimitSummation-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-3",
  "type": "Example",
  "number": "5.1.20",
  "title": "",
  "body": " Write out the following summation notation and evaluate it.                                  "
},
{
  "id": "thm-Property-SummationNotation",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-Property-SummationNotation",
  "type": "Theorem",
  "number": "5.1.21",
  "title": "Properties of Summation Notation.",
  "body": " Properties of Summation Notation            for any constant      for any constant       "
},
{
  "id": "subsec-514-LimitSummation-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-514-LimitSummation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power sums "
},
{
  "id": "thm-PowerSum",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#thm-PowerSum",
  "type": "Theorem",
  "number": "5.1.22",
  "title": "Power Sum Formulas.",
  "body": " Power Sum Formulas   Let be a natural number. Then                    "
},
{
  "id": "exp-Riemann_Square",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#exp-Riemann_Square",
  "type": "Example",
  "number": "5.1.23",
  "title": "",
  "body": " Let . Find the actual area under the graph of over the interval , where algebraically.   By , we know that the actual area can be computed by taking the limit of as . Then what is using summation notation?  After you figure out what is, take the limit of it as .    We will let to be the number of rectangle strips. Then the width of each rectangle is Using the summation notation formula for , we obtain   To obtain the actual area, we want to take the limit of as . Then we obtain   What this tells us here is that the area under the graph of over the interval is .   "
},
{
  "id": "ws-sec51-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Consider the function on the interval .   Graph the function and highlight the region of interest.    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?      "
},
{
  "id": "ws-sec51-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Approximate the area under the graph of the function from to using .   "
},
{
  "id": "ws-sec51-5",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let . Find , , and on the interval .   "
},
{
  "id": "ws-sec51-6",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Approximate the area under the curve on using four subintervals. The graph of the curve is given below.   The graph of the curve        What is the and in this problem?    Approximate the area using the right-endpoint approximation.    Approximate the area using the left-endpoint approximation.    Approximate the area using the midpoint approximation.     "
},
{
  "id": "ws-sec51-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#ws-sec51-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Explain graphically that if is linear on the interval , then the area under the graph on is for all . Don't forget to explain in words what your diagram tells us.   "
},
{
  "id": "sec52-DefiniteIntegral",
  "level": "1",
  "url": "sec52-DefiniteIntegral.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Definite Integral",
  "body": " The Definite Integral   In this section, we will formalize the three approximation methods and investigate a new concept called definite integral . We will explore some basic properties of definite integrals.    After this section, students will be able to:     understand the concept of Riemann sum, including the construction of rectangles using the given partition and sample points.    understand the concept of definite integrals, including each component of it and its meaning.    evaluate basic definite integrals using either geometry or basic formulas.    apply linearity and basic properties to break apart and evaluate definite integral.        Recall the big goal in is to compute the area under the curve. Let's see if we can come up with some basic formulas we can use directly.  Let and be positive real numbers such that . Find the area of the following function over the indicated interval.     over for any positive real number .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?   P.S.: It is fine if we can't match the shape up with a known geometric shape. Richard actually solved this problem in the previous section with some fancy symbol-pushing algebra.    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the highlighted region isn't a known geometric shape with an area formula. So we can't find the area geometrically...  Richard worked out the problem using in the previous section.  Feel free to expand to see what the answer is.      Riemann Sum and Definite Integral  Recall the approximation methods we learned in : we partitioned some closed interval on the -axis to equal parts and construct rectangles on them. This is a special case of the Riemann Sum .  Riemann sum is a more relaxing (and generalized) version of the three approximation methods we learned. We don't require equal width of the rectangles and we don't have to pick the same point on each interval to compute the height.  To specify a Riemann sum, we choose a partition and a set of sample points :    Partition  of size : a choice of points that divides into subintervals (not necessarily of equal width).      Sample points  : belongs to the subinterval for all (and could be any point in the subinterval).   The lenth of the th subinterval is . The Riemann sum in the sum of the terms that are determined by and . This is denoted by    Construction of     Find the Riemann sum for the function , the partition and the choice of sample points    Let's graph the function first. The label each subinterval and locate the sample point in each of them. Based on this, you should be able to construct four rectangles.    Below is the diagram of the four rectangles:   Construction of for , with and .      From the diagram, we can determine the area of each rectangles.    1st rectangle : the width is and the height is .     2nd rectangle : the width is and the height is .     3rd rectangle : the width is and the height is .     4th rectangle : the width is and the height is .   Hence, the Riemann sum is   The Riemann sum of is an approximation of the area under the curve.    As discussed in , the more rectangles we use to approximate the area under the curve, the more accurate our approximation is. Similarly, with smaller and smaller of each of the width of the rectangle (which forces us to use more and more rectangles to approximate the area), the more accurate the area is.  The difference here is that the width are not necessarily equal. To make sure each rectangle has really really really small width, we want to make sure the maximum width, denoted as , is very very very small. Then we can say that the area under the curve is   As mentioned, again in , it is impossible to find the area of infinite rectangle strips. But you know how to find the area of an arbitrary rectangle strip. This is called a representative rectangle .   Representative Rectangle with width of and the height of .      Imagine each representative rectangle will have the width . Then the area under the curve will equal to the sum of the area of all representative rectangles. Mathematically speaking, we call it the definite integral .   Definite Integral   The definite integral of over , denoted by the integral sign, is the limit of the Riemann sum When the limit exists, we say that is integrable over .    To break down each component,   the integral sign, , means summation (a cursive S).    the is the function value at some random point , which works like the height of the representative rectangle. This is also called the integrand .    the is the width of the representative rectangle ( means when the change is really really really small). This is also called the differential .    the and the tells us about the interval. They are called the limits of integration . is the lower limit and is the upper limit .   Unlike in MTH 251 where I made a big deal on the concept of differentiability , I will not ask you any question on whether or not a function is integrable . This is an analysis concept. For the purpose of this class, just remember that is integrable over if is continuous on a closed interval .    Definite Integral and Signed Area  Now we will investigate the relationship between the area and the definite integral.   Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of .        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  You can imagine that the height of any representative rectangle is .  The combined width of all rectangles is .  Hence,   You can see that the definite integral represents the area of the enclosed region (how surprising... ).     Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  But the issue here is that the function value is ... This can't be the height (since height, geometrically speaking, cannot be negative).  This is a place in math that we have to follow the definition if a conflict arise. Since the definition of the definite integral emphasizes the function value, we will need to use in our computation.  Similarly, the width of all rectangles is .  Hence,   Hmm... can't be the area of the enclosed region. This is what we called the signed area (it kind of look like the area of the enclosed region but this is negative).     Signed Area   The signed area is the area above the -axis minus the area below the -axis. That is, we treat the area above the -axis as positive area and the area below the -axis as negative area.    It turns out that the definite integral computes the signed area of the region between the graph of and the -axis over the interval .   Find the value of , where the graph of is shown below:   The graph of       Observe that the region has three parts, two semi-circles and a triangle.  Do we know how to find their respective signed area ?    The first semi-circle occurs in the interval . Since the region is above the -axis, the integral equals to the area.   Next, there is a triangle in the interval . Observe that this region is below the -axis, the integral equals to the negative of the area.  Alternatively , you can see that the \"height\" of the triangle, using the function value, is .  The last region is another semi-circle in the interval . This region is above the -axis so the integral equals to its area.   Putting all these three pieces together, we obtain       Properties of Definite Integral  There are various properties of definite integrals. I will put these properties down and let's see if you can make sense of them. Feel free to use them as you see fit.   Properties of Definite Integrals   Let and be integrable over and is within . Then the following properties hold:    Sum Rule       Constant Multiple Rule       Zero Length Rule       Additivity for Adjacent Intervals       Reversing the Limits of Integration         We called the sum rule and the constant multiple rule combined as the linearity of definite integral.  Furthermore, we can summarize three more formulas to help us evaluate definite integral from the investigation tasks in the beginning of this section.                   With these formulas in our toolkit, we can actually evaluate some definite integrals without relying on the graph .   Evaluate the definite integral    Remember that we want to find the signed area of the function on the interval . This will be difficult to solve it geometrically or using Riemann sum. One of the reasons is because the function is too complicated...  So can we split up the definite integral into smaller pieces so we can tackle one piece at a time?         We will develop a lot of formulas (and a big theorem) to help us evaluate definite integrals. Make sure you keep a list of formulas so you have all the formulas in one sheet you can look up.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     The graph of is shown below. Evaluate each integral using this graph.  The graph of                                       Find the Rieman sum for , , and .      Evaluate the definite integral       Given that evaluate the following definite integrals.                                  Justify grapically, with pretty pictures and explanation that   If is a continuous odd function, then     If is a continuous even function, then         "
},
{
  "id": "sec52-DefiniteIntegral-2-1",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definite integral "
},
{
  "id": "sec52-DefiniteIntegral-2-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-2-2",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After this section, students will be able to:     understand the concept of Riemann sum, including the construction of rectangles using the given partition and sample points.    understand the concept of definite integrals, including each component of it and its meaning.    evaluate basic definite integrals using either geometry or basic formulas.    apply linearity and basic properties to break apart and evaluate definite integral.    "
},
{
  "id": "sec52-DefiniteIntegral-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#sec52-DefiniteIntegral-3",
  "type": "Investigation",
  "number": "5.2.1",
  "title": "",
  "body": "  Recall the big goal in is to compute the area under the curve. Let's see if we can come up with some basic formulas we can use directly.  Let and be positive real numbers such that . Find the area of the following function over the indicated interval.     over for any positive real number .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the width of and height of . Hence, the area under the curve is       over    Graph it out! Label the region of interest! What shape is it?   P.S.: It is fine if we can't match the shape up with a known geometric shape. Richard actually solved this problem in the previous section with some fancy symbol-pushing algebra.    Let's first graph the function and highlight the region of interest.   The graph of with the region under the curve on shaded.      Observe that the highlighted region isn't a known geometric shape with an area formula. So we can't find the area geometrically...  Richard worked out the problem using in the previous section.  Feel free to expand to see what the answer is.    "
},
{
  "id": "subsec-521-RiemannSum-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann Sum "
},
{
  "id": "Construction_RiemannSum",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#Construction_RiemannSum",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": " Construction of   "
},
{
  "id": "subsec-521-RiemannSum-6",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-6",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": " Find the Riemann sum for the function , the partition and the choice of sample points    Let's graph the function first. The label each subinterval and locate the sample point in each of them. Based on this, you should be able to construct four rectangles.    Below is the diagram of the four rectangles:   Construction of for , with and .      From the diagram, we can determine the area of each rectangles.    1st rectangle : the width is and the height is .     2nd rectangle : the width is and the height is .     3rd rectangle : the width is and the height is .     4th rectangle : the width is and the height is .   Hence, the Riemann sum is   The Riemann sum of is an approximation of the area under the curve.   "
},
{
  "id": "subsec-521-RiemannSum-10",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-10",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " Representative Rectangle with width of and the height of .     "
},
{
  "id": "subsec-521-RiemannSum-11",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definite integral "
},
{
  "id": "thm-DefiniteIntegral",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#thm-DefiniteIntegral",
  "type": "Theorem",
  "number": "5.2.8",
  "title": "Definite Integral.",
  "body": " Definite Integral   The definite integral of over , denoted by the integral sign, is the limit of the Riemann sum When the limit exists, we say that is integrable over .   "
},
{
  "id": "subsec-521-RiemannSum-13",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-521-RiemannSum-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrand differential limits of integration lower limit upper limit "
},
{
  "id": "subsec-522-SignedArea-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-3",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": " Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of .        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  You can imagine that the height of any representative rectangle is .  The combined width of all rectangles is .  Hence,   You can see that the definite integral represents the area of the enclosed region (how surprising... ).   "
},
{
  "id": "subsec-522-SignedArea-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-4",
  "type": "Example",
  "number": "5.2.11",
  "title": "",
  "body": " Find the value of .   The integrand is and the interval we care about here is . Recall we defined the definite integrals using Riemann sum, which is a method to approximate the area under the curve.  To help you visualize the problem, I graphed the function and labeled the interval for you. What does the definite integral represent in this graph?   The graph of        Remember the definite integral is the limit of the Riemann sum, where we obtain the area of the rectangles by multiplying the width by some function values that acts as the height.  But the issue here is that the function value is ... This can't be the height (since height, geometrically speaking, cannot be negative).  This is a place in math that we have to follow the definition if a conflict arise. Since the definition of the definite integral emphasizes the function value, we will need to use in our computation.  Similarly, the width of all rectangles is .  Hence,   Hmm... can't be the area of the enclosed region. This is what we called the signed area (it kind of look like the area of the enclosed region but this is negative).   "
},
{
  "id": "def-SignedArea",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#def-SignedArea",
  "type": "Definition",
  "number": "5.2.13",
  "title": "Signed Area.",
  "body": " Signed Area   The signed area is the area above the -axis minus the area below the -axis. That is, we treat the area above the -axis as positive area and the area below the -axis as negative area.   "
},
{
  "id": "subsec-522-SignedArea-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-522-SignedArea-7",
  "type": "Example",
  "number": "5.2.14",
  "title": "",
  "body": " Find the value of , where the graph of is shown below:   The graph of       Observe that the region has three parts, two semi-circles and a triangle.  Do we know how to find their respective signed area ?    The first semi-circle occurs in the interval . Since the region is above the -axis, the integral equals to the area.   Next, there is a triangle in the interval . Observe that this region is below the -axis, the integral equals to the negative of the area.  Alternatively , you can see that the \"height\" of the triangle, using the function value, is .  The last region is another semi-circle in the interval . This region is above the -axis so the integral equals to its area.   Putting all these three pieces together, we obtain    "
},
{
  "id": "thm-Property_DefiniteIntegral",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#thm-Property_DefiniteIntegral",
  "type": "Theorem",
  "number": "5.2.16",
  "title": "Properties of Definite Integrals.",
  "body": " Properties of Definite Integrals   Let and be integrable over and is within . Then the following properties hold:    Sum Rule       Constant Multiple Rule       Zero Length Rule       Additivity for Adjacent Intervals       Reversing the Limits of Integration        "
},
{
  "id": "subsec-523-Properties_DefiniteIntegral-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#subsec-523-Properties_DefiniteIntegral-7",
  "type": "Example",
  "number": "5.2.17",
  "title": "",
  "body": " Evaluate the definite integral    Remember that we want to find the signed area of the function on the interval . This will be difficult to solve it geometrically or using Riemann sum. One of the reasons is because the function is too complicated...  So can we split up the definite integral into smaller pieces so we can tackle one piece at a time?        "
},
{
  "id": "ws-sec52-3-1-1-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-1-1-2",
  "type": "Figure",
  "number": "5.2.18",
  "title": "",
  "body": " The graph of     "
},
{
  "id": "ws-sec52-3-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-3-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-3-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-4",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Find the Rieman sum for , , and .   "
},
{
  "id": "ws-sec52-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-5",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Evaluate the definite integral    "
},
{
  "id": "ws-sec52-6-2",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-2",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-3",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-3",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-4",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-4",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-6-5",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-6-5",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "      "
},
{
  "id": "ws-sec52-7",
  "level": "2",
  "url": "sec52-DefiniteIntegral.html#ws-sec52-7",
  "type": "Worksheet Exercise",
  "number": "11",
  "title": "",
  "body": "  Justify grapically, with pretty pictures and explanation that   If is a continuous odd function, then     If is a continuous even function, then       "
},
{
  "id": "sec53-IndefiniteIntegral",
  "level": "1",
  "url": "sec53-IndefiniteIntegral.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Indefinite Integral",
  "body": " The Indefinite Integral   In this section, you will learn a concept called \"antiderivative\".    After this section, students will be able to:     understand the concept of indefinite integral as the general antiderivative of a function.    rewrite the derivative formulas from calculus 1 using indefinite integrals.    evaluate indefinite integrals using algebraic manipulation and formulas.    solve basic differential equations and IVP.        Recall we learned a lot of derivative formulas back in calculus 1.     Find the following derivatives with respect to .    You should be able to find all these formulas in your calculus 1 notes.      What function will give a derivative of ?   Recall a derivative formula in part (a) should say But the derivative of is , not ...    We can manipulate the derivative formula by multiplying a on both sides of the equation. See that will have a derivative of .   But... Is this the only answer we can get?     We can consider taking the derivative as an operation we can perform on a function. A natural question to wonder is whether we can undo this operation (that is, we know the derivative of a function and we want to find the original function by undoing the derivative). We actually can and this is the main concept we will explore in this section.   Antiderivatives and Indefinite Integrals  Let's define the term antiderivative first (it might be self-explanatory...).    A function is an antiderivative of on an open interval if for all in .    In other words, antiderivative \"undoes\" derivative. Let be a function and be its antiderivative, then its relation is captured in the following diagram:   Relationship between Derivative and Anti-derivative.       Find an antiderivative of the function    What we are tasked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...     Observe that the antiderivative of a function is NOT unique. We are free to change the constant term of the antiderivative and the function is still an antiderivative (because the derivative of a constant is zero, so changing the constant term of a function doesn't affect its derivative).  Symbolically speaking, if is an antiderivative of (which means ), then is also an antiderivative of . Let's make it a nice theorem.    Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .    What this theorem tells us is that all the antiderivatives of a function should only differ by a constant . If we can't determine what this constant is, then we will need to put a to suggest the existence of such a constant.  The argument of this theorem relies on the fact that the derivative of a constant is (so adding a constant to a function doesn't change its derivative). I also include a formal proof of this theorem below (formal as in the argument is more rigorous) if you wonder about how to prove this theorem.   Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!   Recall we have multiple notations back in calculus 1 to denote the concept of derivatives. Of course we will also need a notation to denote the concept of the (general) antiderivatives. We will be using indefinite integral to denote the general antiderivative of a function as follows:    The notation means that . We say that is the general antiderivative or the indefinite integral of .    Now we can capture the relationship between derivatives and anti-derivatives using indefinite integrals.   Relationship between Derivative and Anti-derivative.       But Richard... Isn't integral some sort of area under the curve? Why on earth are we using the same(ish) notation to represent the general antiderivative?  Well we will not be able to answer this question in this section. What we can do in this section is to forget about the area and interpret indefinite integrals as some general antiderivatives.   Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence     Guess-and-check-ing isn't the most efficient method. Just like we have a lot of formulas to help us take the derivative of a function, it will be so nice if we have some formulas to help us find the indefinite integral (aka the general antiderivative) of a function.    Some (basic) Indefinite Integral Formulas  Recall the indefinite integral (aka the general antiderivative) undoes the derivative, which means we can come up with some indefinite integral formulas by rewriting the derivative formulas (along with some basic manipulations).  A famous property you used a lot when taking the derivative is the linearity (meaning you can split up the addition\/subtraction and take out the scalar multiple). This property also holds for integrals.   Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant        We will next look at the power rule since this is the mostly commonly used rule back in calculus 1.   Power Rule for Integrals     for .    Recall the power rule for derivatives works like this:    Multiply the power function by the exponent, and then     Subtract one from the exponent.   Since the indefinite integral undoes the derivative, then you can imagine we will need to undo the multiplication (by division) and the subtraction (by addition). But here is a small catch - when undoing the power rule for derivatives, not only we need to undo each of the step, but also the order of the steps . That is, the power rule for integrals should work like this:    Add one to the exponent, and then     Divide the power function by the exponent.      Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!    Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.    Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The solution below is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .    A big assumption in the power rule is that the power itself cannot be (this should be clear). The what should we do when the power is ?  We have another formula to deal with this special case. Recall we learned the following derivative formula back in calculus 1: If we rewrite this formula (with a bit of an adjustment to take care of a domain issue), then we can obtain a formula to find the indefinite integral of !   Antiderivative of         Now that we have two formulas to find the indefinite integral of a power function, depending on their power. Make sure you pay extra attention to which formula to use when the power function has a power of .   Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:      Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!     You may get an idea by now that simplifying the integrand is a good first step to evaluate an indefinite integral. That is, you want to distribute as much as you can and split up the terms of the integrand, guaranteed by the linearity, and integrate each term separately.  We also learned about the derivative of the six trigonometric functions. Of course we can rewrite them to obtain the following batch of the integral formulas.   Basic Trigonometric Integrals           But Richard... some of the integrands seem complicated in the formulas above. How do I know when I need to use these formula?  The short answer is that... you don't really know when you encounter a problem... While the integral formula for sine and cosine are really common and widely used, you will need to pay special attention to when you obtain the integrand in those special forms. So having those formulas handy is a great idea and you can always check in to see if these formulas will be useful for a problem.   Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain     Later in the term, we will develop more strategies to integrate trigonometric integrals (mainly in section 7.2) so stay tuned!  There are two more integral formulas in this section, which are the integral formulas involving .   Integrals Involving           Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain     We will be developing more and more integral formulas throughout the term. It is a good strategy to organize all the formulas in an integral formula sheet since you will be using some of the formulas again and again and again and again in this class.    Differential Equations and IVP  We know what an equation is. We dealt with equations where two sides of the equal sign are quantities (or numbers). We will briefly discuss differential equations , a type of equation that involves an unknown function and its first or higher derivatives. As you can imagine, the solution is, instead of number(s), function(s).   Solve the differential equation .   While there are a lot of the letters in this equation, the true variable is , as a function of . So what does the stands for and how can we undo it?    What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.     Your solution, if you play your cards right, is not unique. That is, your solution is NOT one single function. This is because we only found the indefinite integral of the right-hand side of the equation, which will result in an arbitrary constant, . But there is no way in the above example for us to figure out what this is... All we knew here is that is a mysterious constant here...  It would be great if we were told one more information that we can used to find this mysterious constant ...   Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .    The above example is called an Initial Value Problem (or IVP for short). The initial condition, for some fixed values of and , allows us to obtain a particular solution to the equation rather than a general solution.  We will finish this section by deriving the formula of the projectile motion as an investigation.    Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in section 5.6.    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?    Since represents the height of the object, its second derivative represents the acceleration , which is always on earth.  Also, we consider going downwards the negative direction vertically, so tells us that the acceleration of the object is going downwards.     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   Observe that the differential equation contains the second derivative, which is obtained by taking the derivative of a function twice in a row.  The solution should be the original function before taking the derivative, which is here. So what operation will undo the derivative and how many times we should apply this operation to cancel the second derivative?    The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that        Something to ponder on...  There are actually two unanswered questions in this section, and they are   Why can we denote the general antiderivative using indefinite integrals? Isn't the concept of integral about some sort of area under the curve?    How are indefinite integrals (aka general antiderivative) related to definite integrals (aka signed area). Or are they even related?   These are both very good questions to ponder on! This is one of the reasons why calculus symbols are confusing, that the integral notation ( ) is being used to denote two different concepts here. You will find the answer to the first question in Section 5.5 and the answer to the second question in Section 5.4.   P.S.: Yes we will cover Section 5.5 first and then Section 5.4.    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.      Verify the following indefinite integrals by differentiation.   P.S.: You will learn how to evaluate these integrals in later chapters\/sections.                                  Evaluate the following indefinite integral.                                                              Solve the following IVP.      given that and        given that and       "
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
  "id": "fig-Derivative-to-Antiderivative",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#fig-Derivative-to-Antiderivative",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": " Relationship between Derivative and Anti-derivative.     "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-6",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": " Find an antiderivative of the function    What we are tasked to find is a mystery function whose derivative is . In other words, what is a function such that Well a derivative formula looks relevant to this problem, which is But the derivative of is , not ...    We can manipulate the derivative formula by dividing both sides of the equation by to obtain on the right-hand side of the equation. See that will have the derivative of .   But... is this the only right answer we can get?    Not necessarily. Let's say someone in your class claimed that the answer should be Well we can verify that this is a right answer since   Later someone else in your class said that the answer should be Technically this is also a right answer because   It seems like there are more than one right answer to this problem. That is, there are more than one antiderivative of ...    "
},
{
  "id": "thm-GeneralAntiderivative",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-GeneralAntiderivative",
  "type": "Theorem",
  "number": "5.3.4",
  "title": "",
  "body": "  Let be an antiderivative of on . Then every antiderivative on is of the form for some constant .  We call this the general antiderivative of .   "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-12",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.4.",
  "body": " Proof of  The whole idea of this argument relies on the fact that only constants will give the derivative of 0.  To make the argument more rigorous, we will let and be some antiderivative of the same function . That is, and .  Since we care about the difference of them, let's define their difference to be where .  We can certainly take the derivative of ! By the linearity, we have So we know the derivative of the difference is 0.  What do we know about the type of function whose derivative is 0... Well from calculus 1, we know that (only) constant functions will have the derivative of 0. That is, for some random constant .  Putting everything together, we know that , which implies that .  Now you see where the comes from!  "
},
{
  "id": "def-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#def-IndefiniteIntegrals",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": "  The notation means that . We say that is the general antiderivative or the indefinite integral of .   "
},
{
  "id": "fig-Derivative-Antiderivative-cycle",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#fig-Derivative-Antiderivative-cycle",
  "type": "Figure",
  "number": "5.3.6",
  "title": "",
  "body": " Relationship between Derivative and Anti-derivative.     "
},
{
  "id": "subsec-531-AntiderivativesANDIndefiniteIntegrals-19",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-531-AntiderivativesANDIndefiniteIntegrals-19",
  "type": "Example",
  "number": "5.3.7",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall the notation of indefinite integral means that we want to find the general antiderivative of the function in the integrand. So what function will give the derivative of ?    You are more than welcome to guess-and-check your answer since we don't yet have any tool to help us find the general antiderivative.  But we can rely on our knowledge of derivatives to make an educated guess.  Let , which is a power function. Then an antiderivative of must also be a power function because only the derivative of power functions will give us back power functions. So .  We know that the power rule of derivatives will take away one from the exponent. To undo this move, the power of on an antiderivative must be .  In addition, the exponent needs to be multiplied to the power function when using the power rule of derivatives. To undo this move, we must divide the by the power of an antiderivative, which is .  Now we have an educated guess, which is To check our answer, we will just need to take the derivative of it and see if it matches with .  Notice that . This implies that the general antiderivative is , and hence    "
},
{
  "id": "thm-Linearity-IndefiniteIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Linearity-IndefiniteIntegrals",
  "type": "Theorem",
  "number": "5.3.8",
  "title": "Linearity of the Indefinite Integrals.",
  "body": " Linearity of the Indefinite Integrals       Sum Rule:       Constant Multiple Rule:  for any constant       "
},
{
  "id": "thm-PowerRule-Integrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-PowerRule-Integrals",
  "type": "Theorem",
  "number": "5.3.9",
  "title": "Power Rule for Integrals.",
  "body": " Power Rule for Integrals     for .   "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-8",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 5.3.9.",
  "body": " Proof of  To make sure our formula is correct, all we need to do is to verify that the derivative of the indefinite integral (aka. the general antiderivative) is indeed the integrand.  Let for . Observe that We proved it!  "
},
{
  "id": "note-findingVSverifying",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#note-findingVSverifying",
  "type": "Note",
  "number": "5.3.10",
  "title": "Finding\/Evaluating versus Verifying.",
  "body": " Finding\/Evaluating versus Verifying  There is a big difference between finding an answer and verifying the answer.  The general method to verify an integral formula is to take the derivative of the answer and see if it matches up with the integrand, whereas finding (or evaluate ) an expression means you do all the math work to obtain the answer.  Be sure you read the prompt of the problem and see which one you are asked to do.   Later in the class, Richard may ask you to derive a formula. He will address his expectation later when it comes to it .  A rule of thumb here is that you should always be finding your answer as your formal work, not verifying (unless Richard asks you to do so specifically). You will do a lot of verifying as your formal work in proof classes but this is an introductory integral calculus class. Being familiar with the concept of integration and various techniques of integration are the important goals in this class.  The example below includes two solutions in different approaches, with one being an acceptable solution in this class, and the other one being an acceptable solution in a proof class but not in this class. Hopefully this illustrate the difference between these two approaches and you can get an idea of which one Richard expects to see.  "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-10",
  "type": "Example",
  "number": "5.3.11",
  "title": "",
  "body": " Evaluate the indefinite integral    The function seems complicated and it is not a power function (so we can't use the power rule on this function as a whole). Is there any property we can use to break down the integral a bit?  Richard is feeling generous today (when I wrote this example) and he will give you the answer so that you can check your answer yourself. The correct final answer is .    An acceptable solution in an integral calculus class       An acceptable solution in a proof class but NOT in an integral calculus class   The solution below is technically correct but Richard will not accept it since he teaches integral calculus, not a proof class   Let . Observe that This shows that , and hence    Richard will only give the credit of presenting the correct answer for this but not the credit to show the work since this line of work didn't tell him where the came from. All it showed here is that the , wherever it came from, is indeed the general antiderivative .   "
},
{
  "id": "thm-Antiderivative-Reciprocal",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-Antiderivative-Reciprocal",
  "type": "Theorem",
  "number": "5.3.12",
  "title": "Antiderivative of <span class=\"process-math\">\\(\\boldsymbol{y = \\dfrac{1}{x}}\\)<\/span>.",
  "body": " Antiderivative of        "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-15",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-15",
  "type": "Example",
  "number": "5.3.13",
  "title": "",
  "body": " Evaluate the indefinite integral    Observe that the integrand is not a power function, but a fraction. We don't have any tool to find the indefinite integral of a fraction yet. Can we simplify this fraction to make it not a fraction and maybe make it a couple of power functions?    We can rewrite the integrand as follows: Now we have three little power functions that we know how to integrate! It seems like we can use the power rule on the first and the last integrals as follows: But what about the integral in the middle... if we were to use the power rule on it, we would obtain But this is bad since there is a zero in the denominator.  This is why we needed the to evaluate this integral since the integrand is a reciprocal function. Then    Notice that I used , , and to represent three arbitrary constants since we should get one out from each integral. Imagine if we add all these arbitrary constants together, the sum is also an arbitrary(ish) constant. In practice, we will just put a big capital to denote the arbitrary constant for the entire integral .  To put everything together, the work should go like this:    "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-16",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-16",
  "type": "Example",
  "number": "5.3.14",
  "title": "",
  "body": " Evaluate the indefinite integral    Notice that there is a radical (square root) expression in the denominator. We don't have a formula to integrate radical expressions... So is there a way to rewrite the radical expression to something we do know how to integrate (like a power function maybe)?    Recall radical expressions are essentially exponential expression (we define radical expressions as fractional exponents). Notice that Now we have power functions that we know how to integrate!    "
},
{
  "id": "thm-BasicTrigIntegrals",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-BasicTrigIntegrals",
  "type": "Theorem",
  "number": "5.3.15",
  "title": "Basic Trigonometric Integrals.",
  "body": " Basic Trigonometric Integrals         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-22",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-22",
  "type": "Example",
  "number": "5.3.16",
  "title": "",
  "body": " Evaluate the indefinite integral    Recall a good first step is to simplify the integrand first by doing distribution (so we can split up the terms using linearity). Sure, let's start with the distribution and see if any of the formula can be applied afterwards.    By distribution and linearity of integrals, we obtain   Okay... the two integrands now are and . They seem complicated to deal with...  But the good news is that there are some formulas we can use here! By , we obtain    "
},
{
  "id": "thm-IntegralInvolvingExponential",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#thm-IntegralInvolvingExponential",
  "type": "Theorem",
  "number": "5.3.17",
  "title": "Integrals Involving <span class=\"process-math\">\\(\\boldsymbol{e^x}\\)<\/span>.",
  "body": " Integrals Involving         "
},
{
  "id": "subsec-532-IndefiniteIntegralFormulas-Basic-26",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-532-IndefiniteIntegralFormulas-Basic-26",
  "type": "Example",
  "number": "5.3.18",
  "title": "",
  "body": " Evaluate the indefinite integral    We of course can split up the terms by the linearity, so we obtain There are two little integrals we need to evaluate... which formula(s) do we need to use and why ?    Observe that is a power function so we can apply the power rule to integrate it.  Yet, is NOT a power function since the power isn't a constant (there is an on the power). We do have a formula in to deal with this integral. Hence, we obtain    "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-3",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-3",
  "type": "Example",
  "number": "5.3.19",
  "title": "",
  "body": " Solve the differential equation .   While there are a lot of the letters in this equation, the true variable is , as a function of . So what does the stands for and how can we undo it?    What this equation tells us here is that a function has a derivative of and the goal is to find this function. Hence, we can undo the derivative by finding its indefinite integral.    "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-6",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-6",
  "type": "Example",
  "number": "5.3.20",
  "title": "",
  "body": " Solve the differential equation with .   Recall we \"solved\" the differential equation in the previous example and obtain the solution of We are given one more piece of information that says . That is, with an input of , the output of the function is . If we plug in and to our solution, we obtain Solving this equation, we obtain . We found this mysterious constant with the additional information given!  Therefore, the solution to this differential equation is .   "
},
{
  "id": "subsec-533-DifferentialEquationsANDIVP-9",
  "level": "2",
  "url": "sec53-IndefiniteIntegral.html#subsec-533-DifferentialEquationsANDIVP-9",
  "type": "Investigation",
  "number": "5.3.2",
  "title": "",
  "body": "  Recall the formula to model the height of an object over time in a projectile motion you learned in the past is where    denotes the height of the object (in feet) after seconds;     is half of the gravitational acceleration ( in the unit of );     denotes the initial velocity (in ft\/sec);     denotes the initial height of the object (in feet).   See that this is a quadratic function. But why on earth can we model the projectile motion using a quadratic function? We will derive this model in this investigation. We will formalize this idea more in section 5.6.    Consider the differential equation . Briefly explain what this equation represents in the context of a projectile motion.   Recall represents the height of the object, which can be thought of as some vertical displacement. Now put on your calculus 1 thinking hat, what physical quantity do you get if you take the second derivative of the displacement?  Also, notice that there is a negative sign in front of the ... Why is this negative?    Since represents the height of the object, its second derivative represents the acceleration , which is always on earth.  Also, we consider going downwards the negative direction vertically, so tells us that the acceleration of the object is going downwards.     Solve this differential equation using the initial conditions and .  Remember that and are two constants denoting the initial velocity and the initial height of the object, respectively.   Observe that the differential equation contains the second derivative, which is obtained by taking the derivative of a function twice in a row.  The solution should be the original function before taking the derivative, which is here. So what operation will undo the derivative and how many times we should apply this operation to cancel the second derivative?    The solution to this equation is the height function. To obtain this function, we will need to undo the second derivative. We can do so by finding the indefinite integral of , which gives us , and then find its indefinite integral again to obtain .   We know that , where denotes the initial velocity of the object. This implies that and hence . Therefore, we obtain   To find , we will need to find the indefinite integral of we just got earlier. We also know that , where denotes the initial height of the object. This implies that and hence Therefore, we can conclude that     "
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
