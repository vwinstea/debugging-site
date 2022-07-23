import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./DevTools.module.css";
import domScreenshot from "./assets/DOMScreenshot.png";
import stylesScreenshot from "./assets/StylesScreenshot.png";
import boxScreenshot from "./assets/BoxScreenshot.png";

function DevTools() {
  // Interaction states
  const [editTextIntroDone, setEditTextIntroDone] = useState(false);
  const [editDOMDone, setEditDOMDone] = useState(false);
  const [editDOMDone2, setEditDOMDone2] = useState(false);
  const [editDOMDone3, setEditDOMDone3] = useState(false);
  const [editDOMDone4, setEditDOMDone4] = useState(false);
  const editTextRef = useRef<HTMLParagraphElement>(null);
  const editDOMRef = useRef<HTMLParagraphElement>(null);
  const editDOMRef2 = useRef<HTMLParagraphElement>(null);
  const editDOMRef3 = useRef<HTMLOListElement>(null);
  const editDOMRef4 = useRef<HTMLParagraphElement>(null);
  const [showMarginAnswer, setShowMarginAnswer] = useState(false);
  const [showAlignAnswer, setShowAlignAnswer] = useState(false);
  const [showColorAnswer, setShowColorAnswer] = useState(false);

  // Interaction checkers
  const editHandlerGenerator =
    (state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>) =>
    (cond: boolean) => {
      if (!state && cond) {
        setState(true);
      }
    };

  const initialText = "Hello, my name is _______";
  const handleEditTextIntro = editHandlerGenerator(
    editTextIntroDone,
    setEditTextIntroDone
  );
  const handleEditDOM = editHandlerGenerator(editDOMDone, setEditDOMDone);
  const handleEditDOM2 = editHandlerGenerator(editDOMDone2, setEditDOMDone2);
  const handleEditDOM3 = editHandlerGenerator(editDOMDone3, setEditDOMDone3);
  const handleEditDOM4 = editHandlerGenerator(editDOMDone4, setEditDOMDone4);

  useEffect(() => {
    const interval = setInterval(() => {
      handleEditTextIntro(editTextRef.current?.textContent !== initialText);
      handleEditDOM(editDOMRef.current?.textContent === "I can edit the DOM!");
      handleEditDOM2(
        editDOMRef2.current?.innerHTML === "This word is in <em>italics</em>"
      );
      handleEditDOM3(
        editDOMRef3.current?.innerHTML ===
          "<li>Item 1</li><li>Item 2</li><li>Item 3</li>"
      );
      handleEditDOM4(editDOMRef4.current?.innerHTML === "<p>No more code</p>");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Interaction styling
  const editableClassname = (complete: boolean) =>
    classNames(styles.editable, complete ? styles.complete : styles.incomplete);

  return (
    <Box>
      <Typography variant="h4">What are Dev Tools?</Typography>
      <Typography>
        Dev Tools are the debugging tools for web developers. They are built
        into all major web browsers -- Chrome, Firefox, Safari, Edge, etc -- and
        allow developers to better understand the structure and functionality of
        their website. In addition to offering the standard debugging tools such
        as a console and the ability to step through code, dev tools also give
        you access to many other aspects of your website such as the DOM, CSS,
        network traffic, and much more. You may not need to use all of these
        tools all the time, but by familiarizing yourself with these tools now,
        you can better prepare yourself to tackle bugs in your project in the
        future and create the best user experience possible.
      </Typography>

      <Typography variant="h4">The Elements View</Typography>
      <Typography>
        The elements view is a part of Dev Tools that every web developer should
        be familiar with. I use them almost every time that I&apos;m developing
        and they can make a world&apos;s difference in your ability to explore
        your code and find bugs. Understanding the elements view is the key to
        understanding your website.
      </Typography>

      <Typography variant="h6">Selecting an Element</Typography>

      <Typography>
        Chances are, you have probably used your browser&apos;s dev tools
        before. If you have ever right clicked on a page and used inspect
        element to edit the content of a page, you have used one of the many dev
        tools that are available to you. As a warm up, try right clicking on the
        text below and selecting inspect or inspect element. This will give you
        access to this webpage&apos;s DOM, which you can now freely edit and
        change the content of just by double clikcing the text you want to
        change in the DOM. Try editing the text below to write your name to in
        the blank.
      </Typography>
      <div className={editableClassname(editTextIntroDone)}>
        <p ref={editTextRef}>{initialText}</p>
      </div>

      {editTextIntroDone && (
        <Typography>
          All right! Now that you are aware of your browser&apos;s Dev Tools,
          lets start diving into all of its key features.
        </Typography>
      )}
      <Typography variant="h6">About the Elements View</Typography>
      <Typography>
        What you just did there was use the Elements View in Dev Tools to
        inspect your selected element and edit it. This is one of the most
        simple and useful features of Dev Tools: they allow you to quickly make
        temporary adjustments to your website while remaining in the browser.
        The elements view is what allows you to view the DOM and styling rules
        that dictate what your user sees. Next, lets take a deeper look at all
        of the information available to us in the elements view and how it can
        be maniupulated.
      </Typography>
      <Typography variant="h6">Viewing Element Properties</Typography>
      <Stack direction="row" spacing={5} sx={{ padding: "0 20px" }}>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Viewing The DOM
            </Typography>
            <Typography>
              The DOM section is pretty straightforward: it gives you access to
              all of the raw HTML generated by your webpage. Note that if
              you&apos;re using React, the real DOM will look different from the
              component tree in your codebase since only HTML tags show up in
              the DOM, not React components. If you do want to inspect your
              component hiarchy, read about React Dev Tools later in this
              walkthrough.
            </Typography>
          </CardContent>
          <CardMedia component="img" src={domScreenshot} alt="Dev Tools DOM" />
        </Card>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Viewing Styles
            </Typography>
            <Typography>
              The styles section is where you can view all of the CSS applied to
              an element. This will include styles applied to that specific
              element (denoted <code>element.styles</code>), as well as rules
              applied by the element&apos;s class and all styles applied to that
              tag. The browser can even tell you which extranious or overriden
              styles are applied by showing the unused style with a{" "}
              <s>strikethrough</s>.There is also a filter button to search for
              styles, as well as a <code>:hov</code> button to enable pseudo
              classes like :hover, and a <code>.cls</code> button to enable and
              disable classes.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            src={stylesScreenshot}
            alt="Dev Tools Styles"
          />
        </Card>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Viewing The Box Model
            </Typography>
            <Typography>
              At the bootom of the styles tab, or in the Computed tab, the
              element&apos; box model will be displayed. This will include the
              conetnt size, padding, boarder, and padding. Understanding this
              model is absolutely crucial to getting the spacing on your webpage
              right. If you are unfamiliar with the box model or need a quick
              refresher,{" "}
              <Link href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model">
                MDN has some great documentaion on it.
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            src={boxScreenshot}
            alt="Dev Tools box model"
          />
        </Card>
      </Stack>

      <Typography variant="h6">Editing element properties</Typography>
      <Typography>
        One of the best parts of Dev Tools is that all of the HTML and CSS you
        can view can also be edited! This can be very useful if you want to mess
        with the content of a webpage or try adding or removing styles. Editing
        directly with inspect element can be very valuable for rapid prototyping
        and development.
      </Typography>
      <Stack direction="row" spacing={5} sx={{ padding: "20px" }}>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Editing The DOM
            </Typography>
            <Typography>
              There are a few ways to edit the DOM, but by far the easiest is
              simply double clicking in the DOM and editing either the content
              or tags in the DOM. Try it out now by changing the text below to
              &quot;I can edit the DOM!&quot;
            </Typography>
            <div className={editableClassname(editDOMDone)}>
              <p ref={editDOMRef}>I ca~ ~~~~ the DO~!</p>
            </div>
            <Typography>
              You can also edit the tags by double clicking on them. Try
              changing the <code>&lt;s&gt;</code> tag to a{" "}
              <code>&lt;em&gt;</code> tag. Also, if the element you want to edit
              isn&apos;t showing up, try clicking on the little arrow next to
              the parent element to expand and show its children.
            </Typography>
            <div className={editableClassname(editDOMDone2)}>
              <p ref={editDOMRef2}>
                This word is in <s>italics</s>
              </p>
            </div>
            <Typography>
              Dev Tools will even let you rearrange the order of elements in the
              DOM by dragging them. Try editing the following list so the items
              are in the correct order.
            </Typography>
            <div className={editableClassname(editDOMDone3)}>
              <ol ref={editDOMRef3}>
                <li>Item 3</li>
                <li>Item 2</li>
                <li>Item 1</li>
              </ol>
            </div>
            <Typography>
              If you want even more control, right click on the DOM and click
              &quot;Edit as HTML&quot; so you can edit the DOM as if it were in
              a text editor. Be careful about making too many changes at once in
              this mode though, since these changes aren&apos;t saved locally so
              once you refresh the page, your changes will be gone. Try
              replacing everything inside the following div with
              <code>&lt;p&gt;No more code&lt;p&gt;</code>
            </Typography>
            <div className={editableClassname(editDOMDone4)} ref={editDOMRef4}>
              <h5>Shopping list</h5>
              <ul>
                <li>Apple</li>
                <li>Another Apple</li>
                <li>One More Apple</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Editing Styles
            </Typography>
            <Typography>
              Editing styles is where the real meat of Dev Tools is. Having the
              ability to rapidly add, edit, and delete styles will allow you to
              nail down your CSS rules in a falsh and can help you identify any
              CSS rules that aren&apos;t working as expected. First off, Dev
              Tools is great at identifying unused styles. If any styles appear
              with a <s>strikethrough</s>, that means it is not being used, so
              as long as they aren&apos;t being used in your code, you can
              remove them and clean up your CSS a bit. Take a look a the code
              sample below and try to identify the unused rules in the{" "}
              <code>DevTools_exampleP</code> class and figure out why they are
              unused and how to fix it. When you&apos;re done, click the buttons
              below to reveal why.
            </Typography>
            <div
              className={classNames(
                styles.exampleDiv,
                editableClassname(
                  showAlignAnswer && showColorAnswer && showMarginAnswer
                )
              )}
            >
              <p className={styles.exampleP}>
                Why isn&apos;t this text working
              </p>
            </div>
            <ul>
              <Typography component="li">
                <b>margin: 24 0</b> -{" "}
                {showMarginAnswer ? (
                  <span>
                    The issue with this rule is that it has invalid syntax. The
                    number 24 is missing units, it should be <code>24px</code>.
                    If you are unfamiliar with this shorthand for margins, the
                    first number gives you the vertical margin (top/bottom) and
                    the second number gives you the horizontal margin
                    (left/right).
                  </span>
                ) : (
                  <Button onClick={() => setShowMarginAnswer(true)}>
                    Show Answer
                  </Button>
                )}
              </Typography>
              <Typography component="li">
                <b>text-align: justify</b> -{" "}
                {showAlignAnswer ? (
                  <span>
                    The issue with this rule is that there is also a{" "}
                    <code>text-align: center</code> rule that already exists in
                    the same ruleset that overrides the{" "}
                    <code>text-align: justify</code>. This is a great example of
                    a CSS rule that will never be used that could be deleted to
                    clean up your code.
                  </span>
                ) : (
                  <Button onClick={() => setShowAlignAnswer(true)}>
                    Show Answer
                  </Button>
                )}
              </Typography>
              <Typography component="li">
                <b>color: green</b> -{" "}
                {showColorAnswer ? (
                  <span>
                    This rule is a bit tricky. The issue is that There is that
                    if you scroll down in the styles view, you&apos;ll see
                    another ruleset (<code>.devTools_exampleDiv *</code>) that
                    has the rule
                    <code>color: yellow !important</code>. Even though this rule
                    would typically be overriden by the green rule since it has
                    less specificity, it is not because of the
                    <code>!important</code> flag. Typically, you want to avoid
                    using the <code>!important</code> flag if you can, so my
                    reccomendation would be to delete that rule altogether,
                    assuming, of course, that it isn&apos;t used anywhere else
                  </span>
                ) : (
                  <Button onClick={() => setShowColorAnswer(true)}>
                    Show Answer
                  </Button>
                )}
              </Typography>
            </ul>
            <Typography>
              Additionally, Dev Tools is great for testing out new styles on
              your webpage. The styles tab allows you to quickly try out new
              styles or modify existing styles. To add a new rule try clicking
              on the right edge of any existing CSS rule or in an existing set
              of braces. To modify an existing rule, just double click the
              existing rule and type. Lastly, if you want to temporarily disable
              a rule, just click on the checkbox that appears whe you hover over
              the left of the rule. Using all of these CSS tools allow you to
              quickly view how CSS modifications may effect your site, and once
              you have made the modifications you like, just copy over the CSS
              rules you added so they are permenantly changed. classes.
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.cardRow}>
          <CardContent>
            <Typography variant="h6" className={styles.cardHeading}>
              Editing The Box Model
            </Typography>
            <Typography>
              There are also a couple of other ways to edit CSS that you may
              find helpful. The first is that the box model view is editable, so
              if you&apos;d like to you may modify the numbers inside the
              content box or on the edges of the padding, border, and margin
              boxes. Modifying These numbers will also automatically generate a
              new CSS rule in the CSS element.style section, which can then be
              copied and added to your code to perminantly keep it.
              Additionally, if you are dealing with pseudoclasses such as :hover
              or :focus, you may click on the :hov button next to the filter bar
              to permenantly turn on that pseudoclass while you&apos;re
              debugging so you don&apos;t have to constantly have your mouse
              hovering over an element to debug its CSS on hover.
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            src={boxScreenshot}
            alt="Dev Tools box model"
          />
        </Card>
      </Stack>
      <Typography variant="h5">The Console View</Typography>
      <Typography variant="h4">Designing For All Screens</Typography>
      <Typography variant="h4">React Dev Tools</Typography>
      <Typography variant="h4">Advanced Features</Typography>
      <Typography variant="h5">The Sources View</Typography>
      <Typography variant="h5">The Network View</Typography>
      <Typography variant="h5">Lighthouse</Typography>
    </Box>
  );
}

export default DevTools;
