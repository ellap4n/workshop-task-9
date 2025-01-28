# workshop-task-9
the URL for this workshop is: https://ellap4n.github.io/workshop-task-9/

## Idea
Honestly going into this one I wasn't too sure of what I wanted to do - all I had in mind was experimenting and playing around with the video capture. 
When watching the workshop I kinda thought about the old ipad photobooths wherre there were multiple screens so I split the screen into four where each had a different experiment(one original) 

## Manipulations 
### Glitching 
I started off with the hardest one as this would take the most time - I coded a new 'square' class similar to that of computer glitch boxes and added show and move functions - the movement was to be quite minimal to emulate noise. the Video Colour picker from the workshop seemed quite interesting, so I chose to use it for the fill, but add glitching colours around the boxes so the glitch effect was still visible. 

#### Containing range 
I wanted to contain the boxes around the range of the top left capture, but not restrict them as glitchs are often not very restricted.. but if they left the frame the colour should disappear. 
there were 2 parts to this that ensured the colour was correct: 

```
  for(i = 0; i < 800; i++) {
    rx = random(0, width);
    ry = random(0, height);
    glitch[i] = new Square(rx, ry);
  }
```
```
rect(this.x/scale, this.y/scale, 20, 10);
```
the top one generated the glitches full scale, where the colour would be picked from, then
the bottom code translated the colors to scale. 
if the boxes moved out of frame there would be nothing to pick from, thus would be blacked out. 

### Posterize Filter 
I added a simple posterize filter for old times sake - this was a popular filter back when intermediate was a thing...
i found it using the filter reference page: https://p5js.org/reference/p5.Image/filter/

### Inverted Circle 
I'm actually not quite sure if this works fully, I think it does but then again I'm not exacltly sure what the exact inverted tones of a colour are. 
I first wanted to use the invert filter, but because the space of inversion was controlled by the mouse and existed as a shape, not image, I had to manually invert this. 
this website was useful - https://www.homeandlearn.co.uk/extras/image/image-invert-colors.html#:~:text=To%20get%20the%20inverted%20colour,sort%20of%20green%2Fblue%20colour.
I subtracted the picked colours from 255 and it appeared to work as it should. 

## Finishing and Next Steps 
Because my webcam is quite bad, alot of the colours were very blurry and dull so I wasn't ablt to test the elements of the code out fully. I will run this on a nicer computerr if I everr get the chance to. I would like to experiment with distorting the video feed with the mouse - ie. ripple effects as the mouse moves across the screen.
