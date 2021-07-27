
# Wrist Options - when customer selects “One Piece” we need to remove the stitching that separates wrist from thumb
-> In this case designer has to seperate stitches. Please check the current stich image in the attachment
view01-fielder-stitch-T-JK-Red

# Wrist Logo Options - glove template doesn’t change when “Embroidery” “Patch Embroidery” or “Patch Stamped” is selected
Please let me know if these are true
- when none is selected, there won't be any logo
- when Embroidery is selected, only logo will appear
- when Patch Embroidery is selected, both patch and logo will appear

But what happens when Patch Stamped is selected? I can't find any image having "stamp" in it.


- Finger pad for white middle finger need to be corrected
- Finger hood and pad for middle finger location is missing for view02 and view04. So, I am using the old images for view02 and view04
- All images shared by you have been updated
- please fix ring finger image for view04 and index finger image for view02


- Should I add "liner color not shown in the builder"?

- Patch Stamped images added
- view03 added
- Custom thumb logo added
- is there any customisation on view03? Eg: customised palm text?


- Enable Add to cart button when customisation has been done
# Final Setup
- S3 setup and configurator images upload
- Image upload server to upload custom logo and all views
- Export all options selected by customers when configuration saved

Updated 21 July

1. Tiffany color option for Kip has been added. Web type T, I, H, Y, V annd Two Piece images are missing for Tiffany color.

2. images of zip colorFIX-07202021.zip and jk-tiffanyAndUSSHfix.zip has been updated

3. piece `view01-fielder-f1-jk-white` (index inner finger white) is wrong. Please share the correct image. See the current image: https://glove-configurator.web.app/images/view01/view01-fielder-f1-jk-white.png

4. Removed "None" option from "Thumb logo" section


**Regarding the reset issue on selection of wrist fur color/pad:**
I tested it on multiple mobile devices (iphone 11, iphone 12, iphone 6/7/8 etc) and found that it is indeed refreshing the page when you go to wrist fur section. I checked the issue has not been addressed anywhere on the internet. It has to do something with iphone 12 and the React.js packages I am using. Unfortunately, I don't have control over them.
But still, I'll write this issue to authors of packages I am using and see if they know anything about it.

Current solution: It seems that the issue happens when the screen changes abrubptly from swatches to list options. So, I had to move it to "Embroidery & Personlaization" tab and it seems be working. If this is not okay with you, I'll have to remove the package that is responsible to providing swipe feature. Comparing with 44, they also haven't included any list option with "Colors" section.

**Regarding other questions asked:**
I've prepared a doc that explains how the app works. Please check it and let me know if you've any question:
https://codecrux.notion.site/Glove-Configurator-How-it-works-e97def997adf455a9208ea8dc7737226


--------------
I've shared the the app's build files so that it can be integrated with the website


-------------
Updates 22 July
-------------

https://glove-configurator.web.app

**For custom logo upload, customer can select image but it does not have to show on the actual glove. We just need our manufacturer to get it.**
- done
  
**“Start Over” should reset builder and automatically bring them back to the beginning.**
- done


**For Finger Hood/Pad, please have location default to index not middle. This is more common.**
- done


**Also for One Piece wrist, when “Camel” is selected, the wrist turns Camel but thumb turns Light Blue**

- it was my mistake. I was displaying t2 and wrist image on top of t2full. But if you notice, select the two piece option and the "Camel" for thumb in view02, it will show "Light Blue" color. So, please share the "Camel" color piece for t2 in view02


**And for E logo color selections, the following colors are missing for each leather type:
Kip - Lemon yellow, Tiffany
Steerhide - Dark camel, Light blue, Toffee, Dark Purple, Brown, Wine, Gray, Dark Gray
Cowhide - Please check all colors
These were showing previously so not sure what happened.**

- In my images folder I don't have those images with me. I checked the backup I sent you on 20th July https://drive.google.com/file/d/1gspW88Oo1BGsEEciYJRKQ2lk3ZUTq17e/view?usp=sharing
There also I could not find it. Please check the attachment.
Possibly, I might have misplaced images. Sorry for that. Could you please send those pictures again?

Or, if the designer can himself manage images on AWS S3, then it would be much easier for all of us. If there's any missing image, the designer can directly update them there. What do you say?


**Regarding the one piece and two piece missing colors:** I get the issue now. Earlier the one piece and two pieces were named as "onepiece" and "twopiece", then later it got renamed to "1piece" and "2piece". I had no idea that it was renamed.
I adjusted the app to pick "1piece" and "2piece" and it looks much better now. If renaming happened for any other parts, please let me know. It is very difficult to keep tracked of renamed images among 11,000+ images.


------------------------
Update 25 july

Thanks for the missing images. This image is still missing:
`view02-fielder-stitch-shield-ch-navyblue.png`

Please note:
in 2 piece images, the spelling of filename was wrong
eg: the given file is: `view01-fielder-stitch-2peice-ch-black.png`
it should be: `view01-fielder-stitch-2piece-ch-black.png`
for new images, please use `piece` instead of `peice`

=====================================

TODOs:

On One Piece wrist is selected, wrist and thumb inner should be all one piece and change to same color at once. Wrist Color should not be an option when One Piece wrist is selected.
When Two Piece wrist is selected, Wrist Color and Thumb Inner should be separate pieces and can be different colors. (done)

Logo not visible in view02 when two piece is selected (done)


For XX remaining please do it the way we mentioned because we need all data captured and sent to our manufacturer. (not required)

Also, the color swatch for yellow on Steerhide is still too muddy. It should match the images (done)

