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
  "body": " Approximating and Computing Area   The big question in this section is how to approximate the area under the curve of a function . You will learn some methods to approximate the area and also how to make the approximation more and more precise.    After this section, students will be able to:     approximate the area under the curve using left-endpoint approximation    approximate the area under the curve using right-endpoint approximation    approximate the area under the curve using midpoint approximation    interpret the summation (sigma) notation        text text text...         Approximating Area by Rectangles  If the region under the curve doesn't look like a known geometric figure, then we can't find the area by searching an area formula we learned before. Before thinking about finding the precise area under the curve, let's come up with a method to approximate the area.  One tool we have in our toolkit is to split the region into a bunch of rectangular strips and we can approximate the area by summing the area of these rectangular strips.   Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.    Observe that Richard made a choice of aligning the upper left corner of each rectangle on the curve when he constructed his three rectangles. Let's give this method of approximation a fancy name! This is called the left-endpoint approximation . Notationally speaking, we can represent this approximation by (left-endpoint approximation using three rectangles).  You may be wondering if we can align the upper right corner of each rectangle on the curve when you construct the rectangle... We certainly can! Let's try the same problem but with a slightly different way of constructing the rectangles!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.    Similarly, we can name this method the right-endpoint approximation ! Notationally speaking, we can represent this approximation by (right-endpoint approximation using three rectangles).  We can actually make it even more fancier by aligning the midpoint of each rectangle on the curve when you construct the rectangle! There are pros and cons to make the method fancier. Let's try the same problem with this slightly fancier method and see what the pros and cons are!   Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .    Again, we can name this even fancier method the midpoint approximation! You can imagine that we can represent this approximation by (midpoint approximation using three rectangles).  You can observe that the midpoint approximation will give a better approximation compared to the left- and the right- endpoint approximation (this is a pro). But the tradeoff here is that the height of each rectangle is a bit more complicated to obtain (this is a con).  When you are approximating something, you usually will need to make a choice between computational power and the accuracy of the approximation . Easier methods will give a less-accurate approximation and more-complicated methods will give a more-accurate approximation.   Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.    Approximate the area under the graph of on the interval using , , and .   Symbolically speaking,    means we want to approximate the area under the curve using six equal-width rectangles whose upper left corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose upper right corners are on the curve.     means we want to approximate the area under the curve using six equal-width rectangles whose midpoint are on the curve.     Remember that diagrams are our friends! In addition, let's see if we can come up with some formulas to compute these approximations so we don't have to graph the function each time.    Let's graph the function and highlight the region of interest first.  The Graph of with the area under the curve on shaded.       We want six rectangles with equal widths so we want to split into six equal parts. If we call the number of rectangles , then we know that   Next, we want to find out the length of each part, aka the width of each rectangle. If we call this number , then we know that   This will allow us to figure out exactly each parts of the partitions. They are   Recall that the height of each rectangles are the function value of some points in each parts. For demonstration purposes, the graph below shows the , , and .   Let's compute the first. The height of each rectangle is the function value of the left-endpoint of each partition. That is,   Next, let's compute . The height of each rectangle is the function value of the right-endpoint of each partition. That is,   Last but not least, let's compute . The height of each rectangle is the function value of the midpoint of each partition. That is,     Let's generalize the process! Let's say we want to approximate the area under the graph of on the interval using equal-width rectangles. Then the width of each rectangle is Furthermore, let's index our 's such that and . Then we can approximate the area under the curve as follows:   We can approximate the area once we can partition the interval and figure out the values of all the 's, where is the index. Then we don't have to graph the functions and construct all the rectangles.   text goes here...    Summation Notation  You may get the feeling that there is a pattern in the formulas above. We are adding similar things together. Sometimes it is kind of tedious to write out all the addends when the addends are similar with a pattern. Actually we have a special notation in math we can use to add things up with a pattern.   The sum of numbers ( ) is denoted where the greek letter (capital sigma) stands for the sum . denotes the index, the below the denotes the starting value of , and the above the denotes the index ends at .      Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain     Using the summation notation, we can rewrite the formulas for , , and more briefly.          But Richard... why introducing another fancy symbol of to make the formulas even more fancier-looking? Well there are several reasons... One of the reasons we care about in this section is that we can actually insert this to Desmos calculator and let it do the work for you (as opposed to you figuring out all the area of the rectangle stripes... not that you can't do it this way).  Another reason is that we can actually do some manipulation with it (e.g., find the limit of it when we have infinitely many rectangles!) if we want to increase the precision of our apprpoximation. This is A BIG IDEA in integral calculus that we will discuss in the next section!  This is just a quick preview. For those of you who are thinking about taking MTH 253Z Sequences and Series. Guess what a series is! Series, roughly speaking, is the sum of a bunch of things so you will definitely see the all over the place in MTH 253Z.   Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image       Computing Area as the Limit of Approximation  Now that we know how to approximate the area under the curve using rectangles. Then the next question here is how to make our approximation better and better.   "
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
  "body": "  text text text...       "
},
{
  "id": "subsec-511-Approximate_Rectangle-4",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-4",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles in the following steps:   Graph the function and highlight the region of interest.    Partition the interval into three equal parts .    Construct three rectangles using these parts as the width of the rectangles.      The first two steps should be straightforward. But how do we determine what the height of each rectangle is... (or does it matter?)    Let's first graph the function and highlight the region of interest in green.   The Graph of      Now we want to partition into three equal parts . This implies that the three parts are: , , and . Observe that the length of each part is .  We will next construct three rectangles using these parts as the width. Then what about the height of each rectangle?   You can actually pick the height of each rectangle that makes sense. For demonstration purposes, Richard constructed his three rectangles by aligning the upper left corner of each rectangle on the graph .   The Graph of with the region under the curve on shaded and three left-endpoint rectangles (upper-left corners marked).      Observe that the area of the orange region is an approximation of the area of the region of interest (the green region). We can actually find the height of each of the three rectangles, which allows us to compute the area of the rectangles.  The height of each rectangle is the function value of the left-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Observe that this is just an approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an under-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-7",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-7",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the upper right corner of each rectangle is on the curve.   Diagrams are our friend! Let's graph and construct these three rectangles!  What is the height of each rectangle?    Below is the diagram of three equal-width rectangles and each of the upper right corner is on the curve.   The Graph of with the region under the curve on shaded and three right-endpoint rectangles (upper-right corners marked).      Observe that the height of each rectangle is the function value of the right-endpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Remember that this is just another approximation of the area under the curve. This is not the actual area under the curve. We can observe, from the diagram above, that is an over-estimate of the actual area.   "
},
{
  "id": "subsec-511-Approximate_Rectangle-10",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-10",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": " Approximate the area under the graph of on the interval using three rectangles with equal-width and the midpoint of each rectangle is on the curve.   Again, diagrams are our friend! Making a pretty diagram will help you determine what the height of each rectangle is so we can compute the area of the rectangles!    Below is the diagram of three equal-width rectangles and each of the midpoint is on the curve.   The Graph of with the region under the curve on shaded and three midpoint rectangles (midpoints marked).      Observe that the height of each rectangle is the function value of the midpoint of each partition.  Hence, an approximation of the area under the curve, using these three rectangles, is    Again, this is just one more approximation of the area under the curve. This is not the actual area under the curve. We actually don't know if this is an under- or over-estimate. Yet, we can observe, from the diagram above, that is a better approximation compared to and .   "
},
{
  "id": "subsec-511-Approximate_Rectangle-14",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-14",
  "type": "Note",
  "number": "5.1.8",
  "title": "Why do I have to approximate the area using rectangles?",
  "body": " Why do I have to approximate the area using rectangles?  You may have an even better way of approximating the area if you are not using rectangles. As an example, you may want to approximate the area using trapezoids as follows:   The Graph of with the region under the curve on shaded and three trapezoids.      This approximation seems to give us an even better approximation... So why using rectangles at all ?  This goes back to the idea of choosing between computational power and accuracy of the approximation . The reason why Richard wanted you to approximate the area using rectangles in this section is because we can find the area of a rectangle easily (so Richard picked the computational power over the accuracy of approximation so far, of course, for a good reason).  You are more than welcome to approximate the area using other shapes other than rectangles. This is just a preview that we will approximate the area using trapezoids and even parabolas in section 7.8.  "
},
{
  "id": "subsec-511-Approximate_Rectangle-15",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-511-Approximate_Rectangle-15",
  "type": "Example",
  "number": "5.1.10",
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
  "number": "5.1.13",
  "title": "",
  "body": " Expand the summation notation . Then evaluate this expression.   Recall the notation represents the sum. So we are adding things together that looks like .  Furthermore, we know the value of is the index that starts at and ends at ...    We will add all the 's together where starts at and ends at . Hence, we obtain    "
},
{
  "id": "subsec-512-SummationNotation-10",
  "level": "2",
  "url": "sec51-ApproximatingArea.html#subsec-512-SummationNotation-10",
  "type": "Example",
  "number": "5.1.14",
  "title": "",
  "body": " Using Desmos , approximate the area under the graph of on the intevral using , , and .   I will help out with the set up!  We will first need a function, so let's type \"g(x)=sqrt(6x+2)\" in the first line.  We will also need to know the value of , , and in order to use the formula... So what are they?  If we want to find , then, in the next line, type \"L_6=sum\". Then you should see a popping out on the screen.  Now you can put in the result of the formula (of course, with the actual value of , , and ) in this line.   Quick Note: You also want to change the index to instead of since this is what the formulas say (or you can replace all the 's with 's in the formulas). Just make sure that the index notation is consistent.     Desmos Demo    Direct link: open image    "
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
