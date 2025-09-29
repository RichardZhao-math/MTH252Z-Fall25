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
  "body": " Approximating and Computing Area   The big question in this section is how to approximate the area under the curve of a function . You will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation        Let's find the area under the curve of some simple functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the side of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is      These problems are easy if the region of interest is a known geometric figure... But things are not always so nice... We will need a way to find (or at least approximate) the area under the curve of any function.   Approximating Area by Rectangles  If the region under the curve doesn't look like a known geometric figure, then we can't find the area by searching an area formula we learned before. Before thinking about finding the precise area under the curve, let's come up with a method to approximate the area.  One tool we have in our toolkit is to split the region into a bunch of rectangular strips and we can approximate the area by summing the area of these rectangular strips.   Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.    Observe that Richard made a choice of aligning the upper left corner of each rectangle on the curve when he constructed his three rectangles. Let's give this method of approximation a fancy name! This is called the left-endpoint approximation . Notationally speaking, we can represent this approximation by (left-endpoint approximation using three rectangles).  You may be wondering if we can align the upper right corner of each rectangle on the curve when you construct the rectangle... We certainly can! Let's try the same problem but with a slightly different way of constructing the rectangles!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.    Similarly, we can name this method the right-endpoint approximation ! Notationally speaking, we can represent this approximation by (right-endpoint approximation using three rectangles).  We can actually make it even more fancier by aligning the midpoint of each rectangle on the curve when you construct the rectangle! There are pros and cons to make the method fancier. Let's try the same problem with this slightly fancier method and see what the pros and cons are!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .    Again, we can name this even fancier method the midpoint approximation! You can imagine that we can represent this approximation by (midpoint approximation using three rectangles).  You can observe that the midpoint approximation will give a better approximation compared to the left- and the right- endpoint approximation (this is a pro). But the tradeoff here is that the height of each rectangle is a bit more complicated to obtain (this is a con).  When you are approximating something, you usually will need to make a choice between computational power and the accuracy of the approximation . Easier methods will give a less-accurate approximation and more-complicated methods will give a more-accurate approximation.   Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.    Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,     Let's generalize the process! Let's say we want to approximate the area under the graph of on the interval using equal-width rectangles. Then the width of each rectangle is Furthermore, let's index our 's such that and . Then we can approximate the area under the curve as follows:   We can approximate the area once we can partition the interval and figure out the values of all the 's, where is the index. Then we don't have to graph the functions and construct all the rectangles.    Summation Notation  You may get the feeling that there is a pattern in the formulas above. We are adding similar things together. Sometimes it is kind of tedious to write out all the addends when the addends are similar with a pattern. Actually we have a special notation in math we can use to add things up with a pattern.   The sum of numbers ( ) is denoted where the greek letter (capital sigma) stands for the sum . denotes the index, the below the denotes the starting value of , and the above the denotes the index ends at .      Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain     Using the summation notation, we can rewrite the formulas for , , and more briefly.          But Richard... why introducing another fancy symbol of to make the formulas even more fancier-looking? Well there are several reasons... One of the reasons we care about in this section is that we can actually insert this to Desmos calculator and let it do the work for you (as opposed to you figuring out all the area of the rectangle stripes... not that you can't do it this way).  Another reason is that we can actually do some manipulation with it (e.g., find the limit of it when we have infinitely many rectangles!) if we want to increase the precision of our apprpoximation. This is A BIG IDEA in integral calculus that we will discuss in the next section!  This is just a quick preview. For those of you who are thinking about taking MTH 253Z Sequences and Series. Guess what a series is! Series, roughly speaking, is the sum of a bunch of things so you will definitely see the all over the place in MTH 253Z.   Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image       Computing Area as the Limit of Approximation  Now that we know how to approximate the area under the curve using rectangles. Then the next natural question here is how to make our approximation better and better.  One thing we can do is to increase the number of rectangle strips . That is, we want to increase the value of in the approximation methods. As is getting larger, this will force the width of each rectangle, , to be smaller and smaller. In other words,   In the following applet, you can see that the apprpoximation is closer and closer to the actual area if we increase the values, regarless of which approximation methods we used .   That is, the actual area can be computed using the limit of our approximation. Let's make it a cool theorem!     If is continuous on , then the left-endpoint, right-endpoint, and the midpoint approximation approches the same limit as . In other words, there is a value of such that If on , then is the area under the graph of on .      But Richard... how can we actually split up the region into infinite number of rectangle strips and find the area of all the strips... This seems impossible to do in practice...  You are correct that this is impossible to achieve in practice... The best we can do is to make our approximation better and better until we are happy about the value (life isn't perfect. how surprising...).  But this is a math class (so we are living in an ideal world where we can assume a lot of things!). If we are given the function, then we actually can compute the actual value of the area under the curve within some interval. This is a central idea of this class.   We are actually ready to formalize these approximation methods in the next section. But if you are feeling a bit of adventurous and devoted to figuring out this limit idea algebraically , feel free to keep reading the next part.    Limit of the approximation algebraically  Recall we can express the sum using the summation notation . Let's do some quick practice to remind us of how it works.   Write out the following summation notation and evaluate it.                                   There are some properties of the summation notation we can use to make our computation easier.    Properties of Summation Notation            for any constant      for any constant         Using these above properties, we can break down a complicated summation notation into smaller pieces (so we can deal with one piece at a time).  There are also three well-known formulas, called the power sums formulas, that tells us the summation of the first integers with powers.    Power Sum Formulas   Let be a natural number. Then                      There are more power sum formulas but they are the most famous three. Rather than actually adding up the numbers, these formulas allow us to compute the sum by plugging in directly.  Let's compute the actual area of some functions algebraically using the summation notation!   Let . Find the actual area under the graph of over the interval , where algebraically.   By , we know that the actual area can be computed by taking the limit of as . Then what is using summation notation?  After you figure out what is, take the limit of it as .    We will let to be the number of rectangle strips. Then the width of each rectangle is Using the summation notation formula for , we obtain   To obtain the actual area, we want to take the limit of as . Then we obtain   What this tells us here is that the area under the graph of over the interval is .    Later in the term, we will derive these formulas to compute the area more efficiently (thanks to FTC!).    Some Exercises for this section   I included some practice problems that cover some main concepts in this section. You don't need to turn it in, but I highly encourage you to work on this with your classmates. I may take problems here to be your in-class practice problems, homework problems, and\/or exam problems. Reach out to Richard for help if you get stuck or have any questions.  I will only include the final answer to some of the problems for you to check your result. If you want to check your work, talk to Richard and he is happy to discuss the process with you.     Consider the function on the interval .   Graph the function and highlight the region of interest.    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?    Approximate the area of the region using . Do we know if this is an under-estimate or over-estimate?         Approximate the area under the graph of the function from to using .      Let . Find , , and on the interval .      Approximate the area under the curve on using four subintervals. The graph of the curve is given below.   The graph of the curve        What is the and in this problem?    Approximate the area using the right-endpoint approximation.    Approximate the area using the left-endpoint approximation.    Approximate the area using the midpoint approximation.        Explain graphically that if is linear on the interval , then the area under the graph on is for all . Don't forget to explain in words what your diagram tells us.     "
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
  "body": "  Let's find the area under the curve of some simple functions!    Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a rectangle with the width of and height of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a triangle with the side of . Hence, the area under the curve is      Find the area of the function on the interval .   Graph it out! Label the region of interest! What shape is it?    Let's first graph the function and highlight the region of interest   The graph of with the region under the curve on shaded.      Observe that the region is a trapezoid . Hence, the area under the curve is     "
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
  "id": "subsec-512-SummationNotation-2",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum sum "
},
{
  "id": "subsec-512-SummationNotation-3",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-3",
  "type": "Example",
  "number": "5.1.16",
  "title": "",
  "body": " Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain    "
},
{
  "id": "subsec-512-SummationNotation-10",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-10",
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
