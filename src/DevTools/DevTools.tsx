import { Box, Typography } from "@mui/material";

function DevTools() {
  return (
    <Box>
      <Typography>
        Dev Tools are a critical feature of any browser, and are absolutely
        crucial to making a website that performs well and runs smoothly.
      </Typography>
      <Typography variant="h4">What are Dev Tools?</Typography>
      <Typography>
        Chances are, you have probably used your browser&apos;s dev tools
        before. If you have ever right clicked on a page and used inspect
        element to edit the content of a page, you have used one of the many dev
        tools that are available to you. If you are unfamiliar with dev tools,
        try right clicking on the text below and selecting inspect or inspect
        element. This will give you access to this webpage&apos;s DOM, which you
        can now freely edit and change the content of. Try editing the text
        below to write your name to in the blank.
      </Typography>
      <p>Hello, my name is _______</p>
      <Typography variant="caption">
        Note: Dev Tools are available on all major browsers including, Chrome,
        Firefox, Safari, and Edge. On some browsers, such as Safari, the dev
        tools are disabled by default and you have to enable them in the
        settings. In this demonstration, we will be using Chrome Dev Tools since
        it&apos; the most robust, but most features are shared across browsers,
        and it never hurts to have different people on your team testing out
        your site on different browsers since they can all render webpages a
        little differently.
      </Typography>
      <Typography>
        {" "}
        All right! Now that you are aware of your browser&apos;s Dev Tools, lets
        start diving into all of its key features
      </Typography>
      <Typography variant="h4">The Essentials</Typography>
      <Typography variant="h5">The Elements View</Typography>
      <Typography variant="h5">The Console View</Typography>
      <Typography variant="h4">Designing for all screens</Typography>
      <Typography variant="h5">Advanced features</Typography>
      <Typography variant="h5">The Sources View</Typography>
      <Typography variant="h5">The Network View</Typography>
      <Typography variant="h5">Lighthouse</Typography>
    </Box>
  );
}

export default DevTools;
