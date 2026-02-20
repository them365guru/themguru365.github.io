const APP_DATA = {

  prompts: [
    {
      id: 'p1',
      icon: '⚡',
      title: 'The "Meeting Slayer"',
      app: 'Teams / Word',
      subtitle: 'Transforms raw transcripts into a clean action-item table in seconds.',
      prompt: `I am going to provide a raw transcript/set of meeting notes. Please analyze the text and generate a professional summary in a 3-column Markdown table.\nColumns: Task/Action Item, Priority (High/Medium/Low), and Owner.\nUse concise, professional language and ensure no key deadlines are missed. Here is the text: [Meeting Text Here]`,
      tips: [
        'Works best in Teams Copilot after a recorded meeting — paste the auto-transcript directly.',
        'Add "Flag any items with a deadline within 48 hours in bold" for extra urgency.'
      ]
    },
    {
      id: 'p2',
      icon: '📬',
      title: 'The "Inbox Zero"',
      app: 'Outlook',
      subtitle: 'Your AI executive assistant — triage, prioritise, and draft replies instantly.',
      prompt: `Act as my Executive Assistant. I am pasting the subject lines and content from my unread emails.\nPlease provide:\n1. A 3-sentence summary of the overall status of my inbox.\n2. A numbered list of the top 3 most urgent actions I need to take.\n3. A draft response for the most critical email that sounds professional yet brief.\nHere is the data: [Paste Email Data Here]`,
      tips: [
        'Use Outlook Copilot → Summarise first, then paste the summary here for a deeper triage.',
        'Append "Do not draft responses to newsletters or automated notifications" to reduce noise.'
      ]
    },
    {
      id: 'p3',
      icon: '🎯',
      title: 'The "Slide Wizard"',
      app: 'PowerPoint',
      subtitle: 'Converts documents, briefs, or notes into a structured presentation outline.',
      prompt: `Act as a senior presentation designer. Using the content I provide, create a structured PowerPoint outline.\nFormat the output as:\n- Slide number and title\n- 3 bullet points per slide (max 10 words each)\n- A suggested visual or chart type for each slide\n- A one-line speaker note\n\nKeep the narrative arc: Problem → Solution → Evidence → Call to Action.\nHere is the content: [Paste Document / Brief Here]`,
      tips: [
        'In PowerPoint Copilot, follow up with "Create this presentation" to auto-generate slides from the outline.',
        'Add "Target audience: [role]" to tailor the language and complexity.'
      ]
    },
    {
      id: 'p4',
      icon: '📊',
      title: 'The "Data Storyteller"',
      app: 'Excel',
      subtitle: 'Turns raw spreadsheet data into clear insights and business narrative.',
      prompt: `You are a business analyst. I am sharing data from a spreadsheet.\nPlease provide:\n1. A 2-paragraph executive summary of the key trends and anomalies.\n2. The top 3 insights a decision-maker should act on immediately.\n3. Suggest the single most impactful chart type to visualise this data and explain why.\n\nUse plain business language — no jargon.\nHere is the data: [Paste Table / Data Here]`,
      tips: [
        'In Excel Copilot, highlight a range and ask "What story does this data tell?" as a quick starter.',
        'Add "Compare this period to the previous period and highlight statistically significant changes."'
      ]
    },
    {
      id: 'p5',
      icon: '✍️',
      title: 'The "Document Doctor"',
      app: 'Word',
      subtitle: 'Rewrites, sharpens, and formats any draft into a polished professional document.',
      prompt: `You are an expert business writer and editor. Review the document I provide and:\n1. Rewrite any unclear or verbose sections for brevity and clarity.\n2. Ensure tone is: [formal / persuasive / empathetic — choose one]\n3. Add a concise TL;DR summary (3 sentences max) at the top.\n4. Suggest a stronger opening sentence and closing call-to-action.\n5. Flag any factual claims that appear unsupported.\n\nHere is the document: [Paste Document Here]`,
      tips: [
        'Use Word Copilot → Rewrite for paragraph-level edits directly in the doc.',
        'Specify reading level: "Write for a non-technical audience at a Grade 10 reading level."'
      ]
    },
    {
      id: 'p6',
      icon: '🚀',
      title: 'The "Project Kickstarter"',
      app: 'Teams / Planner',
      subtitle: 'Generates a full project plan from a one-line brief — ready to paste into Planner.',
      prompt: `Act as a certified Project Manager (PMP). Based on the project brief below, generate a structured project plan including:\n1. A project goal statement (one sentence).\n2. 5 key milestones with suggested completion weeks (Week 1, 2, etc.).\n3. For each milestone: list 3 tasks, the suggested owner role, and dependencies.\n4. A RAID log starter (2 Risks, 2 Assumptions, 1 Issue, 1 Dependency).\n\nFormat as a clear table where possible.\nProject Brief: [Describe Your Project Here]`,
      tips: [
        'Copy milestones directly into Microsoft Planner or Loop as a task list.',
        'Add "Assume a team of [N] people and a budget of [£/$ amount]" for more realistic planning.'
      ]
    }
  ],

  tips: [
    { id: 't1',  num: '01', cat: 'General', app: 'All M365',  title: 'Paste text-only with Ctrl+Shift+V',                  body: 'Strips all formatting from clipboard content — perfect when pasting from web or other documents.' },
    { id: 't2',  num: '02', cat: 'General', app: 'All M365',  title: 'Search commands with Alt+Q',                        body: 'Universal search lets you access any command instantly without navigating ribbons.' },
    { id: 't3',  num: '03', cat: 'General', app: 'Office.com',title: 'Pin apps in Office.com',                            body: 'Pin your most-used apps to the top row for one-click access every time you sign in.' },
    { id: 't4',  num: '04', cat: 'General', app: 'OneDrive',  title: 'Use OneDrive version history',                      body: 'Restore any previous save of a file — up to 30 days back. Go to File → Version History.' },
    { id: 't5',  num: '05', cat: 'General', app: 'OneDrive',  title: 'Drag files into OneDrive to upload',               body: 'Drag files directly into OneDrive in your browser or File Explorer to upload instantly.' },
    { id: 't6',  num: '06', cat: 'General', app: 'Mobile',    title: 'Scan documents with the M365 mobile app',          body: 'Turns your phone into a scanner — auto-enhances and uploads to OneDrive as a searchable PDF.' },
    { id: 't7',  num: '07', cat: 'General', app: 'All M365',  title: 'Use @mentions in comments',                        body: 'Notify colleagues and assign tasks directly inside Word, Excel, and PowerPoint comments.' },
    { id: 't8',  num: '08', cat: 'General', app: 'All M365',  title: 'Open documents in desktop apps',                   body: 'Click "Open in Desktop App" from the browser for full feature access and faster performance.' },
    { id: 't9',  num: '09', cat: 'General', app: 'OneDrive',  title: 'Share links instead of attachments',               body: 'Everyone works on the same file — no version conflicts, no duplicates.' },
    { id: 't10', num: '10', cat: 'General', app: 'Office.com',title: 'Use the App Launcher to switch apps',              body: 'Click the waffle icon top-left to switch between all M365 apps without leaving your browser.' },
    { id: 't11', num: '11', cat: 'Word',    app: 'Word',       title: 'Ctrl+Shift+L for bullet points',                  body: 'Instantly apply bullet point formatting to any selected text.' },
    { id: 't12', num: '12', cat: 'Word',    app: 'Word',       title: 'Double-click Format Painter to lock it',          body: 'Lock Format Painter on to apply the same formatting to multiple selections before pressing Esc.' },
    { id: 't13', num: '13', cat: 'Word',    app: 'Word',       title: 'Use Styles for structure',                        body: 'Styles control formatting and power the Navigation Pane and table of contents.' },
    { id: 't14', num: '14', cat: 'Word',    app: 'Word',       title: 'Use the Navigation Pane',                         body: 'Open with Ctrl+F to jump between headings and search text instantly.' },
    { id: 't15', num: '15', cat: 'Word',    app: 'Word',       title: 'Track Changes with Simple Markup',                body: 'A cleaner view of edits without the visual clutter of Full Markup.' },
    { id: 't16', num: '16', cat: 'Word',    app: 'Word',       title: 'Use Dictation to draft faster',                   body: 'Speak your document into existence — great for first drafts and meeting notes.' },
    { id: 't17', num: '17', cat: 'Word',    app: 'Word',       title: 'Use Editor for grammar and clarity',              body: 'AI-powered grammar, conciseness, and tone suggestions built right into Word.' },
    { id: 't18', num: '18', cat: 'Word',    app: 'Word',       title: 'Insert Icons for visuals',                        body: 'A built-in library of scalable, professional icons to enhance any document visually.' },
    { id: 't19', num: '19', cat: 'Word',    app: 'Word',       title: 'Compare documents',                               body: 'Use Review → Compare to diff two versions and see every change highlighted.' },
    { id: 't20', num: '20', cat: 'Word',    app: 'Word',       title: 'Translate documents',                             body: 'Use Review → Translate to translate the entire document or a selection instantly.' },
    { id: 't21', num: '21', cat: 'Excel',   app: 'Excel',      title: 'Ctrl+Shift+Arrow to select ranges',               body: 'Instantly select entire ranges of data in any direction — no mouse needed.' },
    { id: 't22', num: '22', cat: 'Excel',   app: 'Excel',      title: 'Ctrl+T to create a Table',                        body: 'Converts a data range into a smart Table with auto-filtering, sorting, and formula references.' },
    { id: 't23', num: '23', cat: 'Excel',   app: 'Excel',      title: 'Use XLOOKUP instead of VLOOKUP',                  body: 'Searches in any direction and handles missing values far more elegantly.' },
    { id: 't24', num: '24', cat: 'Excel',   app: 'Excel',      title: 'Flash Fill with Ctrl+E',                          body: 'Excel detects your pattern and replicates it across the entire column instantly.' },
    { id: 't25', num: '25', cat: 'Excel',   app: 'Excel',      title: 'Use PivotTables',                                 body: 'Summarise, group, and analyse large datasets without writing a single formula.' },
    { id: 't26', num: '26', cat: 'Excel',   app: 'Excel',      title: 'Use Conditional Formatting',                      body: 'Visually highlight trends, thresholds, and anomalies in your data automatically.' },
    { id: 't27', num: '27', cat: 'Excel',   app: 'Excel',      title: 'Freeze Panes to lock headers',                    body: 'Lock header rows or columns in place when scrolling large sheets.' },
    { id: 't28', num: '28', cat: 'Excel',   app: 'Excel',      title: 'Use FILTER() for dynamic results',                body: 'Extract rows matching any condition dynamically — no manual filtering needed.' },
    { id: 't29', num: '29', cat: 'Excel',   app: 'Excel',      title: 'Use UNIQUE() to deduplicate',                     body: 'Returns a deduplicated list from any column in a single formula.' },
    { id: 't30', num: '30', cat: 'Excel',   app: 'Excel',      title: 'Use Ideas for AI insights',                       body: 'AI-generated insights, charts, and pattern detection on your selected data.' },
    { id: 't31', num: '31', cat: 'Teams',   app: 'Teams',      title: 'Ctrl+E to search in Teams',                       body: 'Jump straight to the search bar — find messages, files, or people in seconds.' },
    { id: 't32', num: '32', cat: 'Teams',   app: 'Teams',      title: 'Ctrl+Shift+M to mute/unmute',                     body: 'Instantly mute or unmute your microphone during any call without touching the mouse.' },
    { id: 't33', num: '33', cat: 'Teams',   app: 'Teams',      title: 'Ctrl+Shift+O to toggle camera',                   body: 'Toggle your camera on or off without touching the mouse during a meeting.' },
    { id: 't34', num: '34', cat: 'Teams',   app: 'Teams',      title: 'Use @mentions in Teams',                          body: 'Notify specific people — they get an alert even if they\'re not currently active.' },
    { id: 't35', num: '35', cat: 'Teams',   app: 'Teams',      title: 'Use slash commands',                              body: 'Type / in the compose box to access quick commands like /goto, /call, /files, and more.' },
    { id: 't36', num: '36', cat: 'Teams',   app: 'Teams',      title: 'Pin chats and channels',                          body: 'Right-click any chat or channel and select Pin to keep it at the top of your list.' },
    { id: 't37', num: '37', cat: 'Teams',   app: 'Teams',      title: 'Use Loop components',                             body: 'Embed live, collaborative tables, lists, and tasks directly in chat messages.' },
    { id: 't38', num: '38', cat: 'Teams',   app: 'Teams',      title: 'Use Together Mode',                               body: 'Places everyone in a shared virtual space — reduces meeting fatigue on long calls.' },
    { id: 't39', num: '39', cat: 'Teams',   app: 'Teams',      title: 'Use Meet Now for instant calls',                  body: 'Spin up an instant video call with anyone — no scheduling required.' },
    { id: 't40', num: '40', cat: 'Teams',   app: 'Teams',      title: 'Record meetings',                                 body: 'Recordings auto-save to OneDrive with AI-generated transcripts. Find in More Options (···).' },
    { id: 't41', num: '41', cat: 'Outlook', app: 'Outlook',    title: 'Ctrl+Enter to send email',                        body: 'Send emails instantly — faster than reaching for the mouse.' },
    { id: 't42', num: '42', cat: 'Outlook', app: 'Outlook',    title: 'Use @mentions in Outlook',                        body: 'Highlight a person\'s name in the email body — they see it flagged in their inbox.' },
    { id: 't43', num: '43', cat: 'Outlook', app: 'Outlook',    title: 'Use Focused Inbox',                               body: 'AI separates important emails from newsletters and low-priority messages automatically.' },
    { id: 't44', num: '44', cat: 'Outlook', app: 'Outlook',    title: 'Use Sweep to clean up senders',                   body: 'Bulk-delete or move all emails from a sender with a single action.' },
    { id: 't45', num: '45', cat: 'Outlook', app: 'Outlook',    title: 'Use Rules to auto-organise',                      body: 'Automatically move, flag, or forward emails based on sender, subject, or keywords.' },
    { id: 't46', num: '46', cat: 'Outlook', app: 'Outlook',    title: 'Use Delay Send',                                  body: 'Schedule emails to send at the right time without being at your desk.' },
    { id: 't47', num: '47', cat: 'Outlook', app: 'Outlook',    title: 'Use Quick Steps',                                 body: 'Perform multi-action workflows (move + mark read + reply) with a single click.' },
    { id: 't48', num: '48', cat: 'Outlook', app: 'Outlook',    title: 'Ignore Conversation',                             body: 'Mute a noisy email thread — future replies are auto-deleted immediately.' },
    { id: 't49', num: '49', cat: 'Outlook', app: 'Outlook',    title: 'Use My Templates',                                body: 'Save reusable email copy for one-click reply drafts — View → My Templates.' },
    { id: 't50', num: '50', cat: 'Outlook', app: 'Outlook',    title: 'Use Scheduling Assistant',                        body: 'See everyone\'s free/busy time before sending meeting invites.' }
  ],

  advanced: [
    { id: 'a1',  num: '01', section: 'M365 Power Moves',  title: 'Use universal search (Alt+Q) as your command launcher',     desc: 'Universal Search lets you access any command instantly without navigating ribbons. It\'s the fastest way to discover features and execute actions.',           example: 'You want to insert a table in Word. Press Alt+Q, type "table," and hit Enter.' },
    { id: 'a2',  num: '02', section: 'M365 Power Moves',  title: 'Share links instead of attaching files',                   desc: 'Sharing links ensures everyone works on the same version, eliminates duplicates, and gives you full control over permissions.',                          example: 'Instead of attaching "Report_v7_FINAL.docx," click Share → Copy Link and send the link.' },
    { id: 'a3',  num: '03', section: 'M365 Power Moves',  title: 'Use OneDrive\'s "Request Files" feature',                  desc: 'Allows you to collect files from multiple people without giving them access to the folder.',                                                             example: 'You need 20 people to upload monthly reports. Right-click a folder → Request Files → send the link.' },
    { id: 'a4',  num: '04', section: 'M365 Power Moves',  title: 'Add shared libraries to OneDrive',                        desc: 'Brings SharePoint folders into your OneDrive so they sync locally and appear in File Explorer.',                                                          example: 'Click "Add shortcut to OneDrive" on your team\'s SharePoint to sync docs to your computer.' },
    { id: 'a5',  num: '05', section: 'M365 Power Moves',  title: 'Use the M365 mobile app to scan documents',               desc: 'The app turns your phone into a scanner, automatically enhancing and uploading images to OneDrive.',                                                    example: 'Scan a whiteboard after a meeting and save it directly to your project folder.' },
    { id: 'a6',  num: '06', section: 'M365 Power Moves',  title: 'Use @mentions in comments across apps',                   desc: '@mentions notify people and assign tasks directly inside documents.',                                                                                  example: 'Highlight a paragraph in Word → Add comment → Type @John to request edits.' },
    { id: 'a7',  num: '07', section: 'M365 Power Moves',  title: 'Use Loop components for real-time collaboration',         desc: 'Loop components stay synced across Teams, Outlook, and Whiteboard — enabling live co-editing.',                                                         example: 'Create a Loop checklist in Teams chat so your team updates tasks together during a meeting.' },
    { id: 'a8',  num: '08', section: 'M365 Power Moves',  title: 'Use Office.com\'s "All Content" view',                    desc: 'Searches across OneDrive, Teams, and SharePoint — everything you have access to in one place.',                                                          example: 'Search "budget" and instantly find files from multiple Teams and SharePoint sites.' },
    { id: 'a9',  num: '09', section: 'M365 Power Moves',  title: 'Pin important files for quick access',                    desc: 'Pinning keeps your most-used files at the top of your Recent list — always one click away.',                                                             example: 'Pin your weekly report so it\'s always the first thing you see when opening OneDrive.' },
    { id: 'a10', num: '10', section: 'M365 Power Moves',  title: 'Customize the App Launcher',                              desc: 'Pin your most-used apps to the top row of the waffle menu for faster cross-app navigation.',                                                          example: 'Pin Planner, Power Automate, and OneNote for one-click access from any M365 app.' },
    { id: 'a11', num: '11', section: 'Word Advanced',     title: 'Use Styles to automate formatting and structure',          desc: 'Styles control formatting, navigation, and tables of contents. They create consistency and save time.',                                                example: 'Apply Heading 1, 2, and 3 to build a dynamic, auto-updating table of contents.' },
    { id: 'a12', num: '12', section: 'Word Advanced',     title: 'Use the Navigation Pane to reorganize long documents',     desc: 'The Navigation Pane lets you drag and drop entire sections by their headings.',                                                                        example: 'Move the "Conclusion" section above "Recommendations" by dragging its heading in the pane.' },
    { id: 'a13', num: '13', section: 'Word Advanced',     title: 'Use "Compare" and "Combine" for version control',         desc: 'These tools merge edits from multiple reviewers into one clean tracked-changes document.',                                                             example: 'Combine edits from three colleagues into a single file without losing anyone\'s changes.' },
    { id: 'a14', num: '14', section: 'Word Advanced',     title: 'Use "Editor" for clarity and tone',                       desc: 'Editor checks grammar, clarity, conciseness, and tone — like a built-in AI writing coach.',                                                          example: 'Editor suggests simplifying long sentences and flags passive voice in your proposal.' },
    { id: 'a15', num: '15', section: 'Word Advanced',     title: 'Use "Restrict Editing" to protect templates',             desc: 'Lock formatting or specific sections to prevent accidental changes to branded content.',                                                             example: 'Lock your company\'s branded header and footer so collaborators can\'t accidentally edit them.' },
    { id: 'a16', num: '16', section: 'Word Advanced',     title: 'Use AutoSave + Version History',                          desc: 'Version History lets you browse and restore any earlier version of a document saved to OneDrive.',                                                    example: 'Recover an entire paragraph deleted by mistake — go to File → Version History to restore it.' },
    { id: 'a17', num: '17', section: 'Word Advanced',     title: 'Use Dictation for fast drafting',                         desc: 'Dictation helps you write long content quickly and naturally — speak at your full thinking speed.',                                                    example: 'Dictate meeting notes directly into Word immediately after a call while they\'re fresh.' },
    { id: 'a18', num: '18', section: 'Word Advanced',     title: 'Use Smart Lookup for quick research',                     desc: 'Smart Lookup pulls definitions and web results without ever leaving your document.',                                                                  example: 'Right-click "blockchain" → Smart Lookup → read the definition → insert it directly.' },
    { id: 'a19', num: '19', section: 'Word Advanced',     title: 'Insert Icons for clean, professional visuals',            desc: 'Icons are scalable, royalty-free graphics built directly into Word — no external sourcing needed.',                                                  example: 'Insert a shield icon next to a "Security" heading to add instant visual context.' },
    { id: 'a20', num: '20', section: 'Word Advanced',     title: 'Use Read Aloud to catch errors',                          desc: 'Hearing your writing helps you spot mistakes and awkward phrasing that your eyes miss.',                                                              example: 'Use Read Aloud to review your final draft before sending — you\'ll catch more than a visual re-read.' },
    { id: 'a21', num: '21', section: 'Excel Advanced',    title: 'Use dynamic arrays (FILTER, SORT, UNIQUE)',               desc: 'Dynamic arrays automatically expand and update as your data changes — no more manual range management.',                                             example: 'Use UNIQUE() to generate a live, auto-updating list of departments from a raw data column.' },
    { id: 'a22', num: '22', section: 'Excel Advanced',    title: 'Use XLOOKUP instead of VLOOKUP',                          desc: 'XLOOKUP searches in any direction and handles missing values far more elegantly than VLOOKUP.',                                                        example: 'Find an employee\'s email using their name, even if the email column is to the LEFT of the name.' },
    { id: 'a23', num: '23', section: 'Excel Advanced',    title: 'Use LAMBDA to create custom functions',                   desc: 'LAMBDA lets you turn complex formulas into named, reusable functions — like writing your own Excel functions.',                                       example: 'Create a custom =WEIGHTEDAVG() function once, then reuse it across every sheet.' },
    { id: 'a24', num: '24', section: 'Excel Advanced',    title: 'Use LET to simplify long formulas',                       desc: 'LET names variables inside formulas for clarity and performance — define once, reference many times.',                                               example: 'Define "discountRate" once at the top of a LET formula and reuse it throughout.' },
    { id: 'a25', num: '25', section: 'Excel Advanced',    title: 'Use Power Query to clean messy data',                     desc: 'Power Query automates data cleaning and transformation — record it once, refresh it forever.',                                                         example: 'Import a messy CSV, split columns, remove duplicates, and refresh with one click every month.' },
    { id: 'a26', num: '26', section: 'Excel Advanced',    title: 'Use PivotTables with slicers',                            desc: 'PivotTables summarise data; slicers make them interactive — turning static summaries into live dashboards.',                                          example: 'Add Region and Month slicers to a sales PivotTable so stakeholders can filter the view themselves.' },
    { id: 'a27', num: '27', section: 'Excel Advanced',    title: 'Use "Show Changes" in shared workbooks',                  desc: 'Track exactly who changed what cell and when — a complete audit trail for collaborative spreadsheets.',                                              example: 'See the exact timestamp when a colleague updated sales figures in a shared quarterly report.' },
    { id: 'a28', num: '28', section: 'Excel Advanced',    title: 'Use Data Validation to prevent errors',                   desc: 'Data Validation restricts inputs to predefined values, keeping your data clean from the source.',                                                      example: 'Create a dropdown list of approved product names so users can\'t enter free-text typos.' },
    { id: 'a29', num: '29', section: 'Excel Advanced',    title: 'Use Conditional Formatting for instant insights',         desc: 'Highlight trends, outliers, and patterns visually — your data tells its story without a chart.',                                                      example: 'Apply a colour scale to a performance table so high, medium, and low instantly stand out.' },
    { id: 'a30', num: '30', section: 'Excel Advanced',    title: 'Use "Ideas" for AI-powered insights',                     desc: 'Ideas analyses your data and suggests charts, patterns, and correlations you may have missed.',                                                       example: 'Excel highlights a surprising correlation between sales and seasonality — and auto-generates a chart.' },
    { id: 'a31', num: '31', section: 'Teams Advanced',    title: 'Use slash commands for instant actions',                  desc: 'Slash commands let you perform actions quickly from the search bar without navigating the UI.',                                                      example: 'Type /files to instantly see your recent files, or /call [name] to start a call immediately.' },
    { id: 'a32', num: '32', section: 'Teams Advanced',    title: 'Pin chats, channels, and apps',                          desc: 'Pinning keeps the most important items at the top of your lists — right-click anything to pin it.',                                                  example: 'Pin your active project channel so it\'s always the first thing you see when opening Teams.' },
    { id: 'a33', num: '33', section: 'Teams Advanced',    title: 'Save messages to bookmark key information',              desc: 'Saved messages act as your personal reference list — bookmark anything you\'ll need to find again.',                                              example: 'Save a message containing meeting instructions so you can find it instantly, not scroll for it.' },
    { id: 'a34', num: '34', section: 'Teams Advanced',    title: 'Use Loop components in chat',                            desc: 'Loop components allow real-time co-editing directly inside a Teams chat message.',                                                                  example: 'Create a shared task list during a meeting that everyone can update simultaneously in the chat.' },
    { id: 'a35', num: '35', section: 'Teams Advanced',    title: 'Use Meeting Recap to catch up fast',                     desc: 'Recap includes recordings, transcripts, AI-generated notes, and shared files — all in one place.',                                                  example: 'Review a one-hour meeting you missed in under 5 minutes using the Recap summary.' },
    { id: 'a36', num: '36', section: 'Teams Advanced',    title: 'Use Breakout Rooms for workshops',                       desc: 'Breakout rooms split participants into smaller groups for focused discussion — then bring everyone back.',                                           example: 'Split 30 attendees into 5 rooms for brainstorming, then reconvene to share outputs.' },
    { id: 'a37', num: '37', section: 'Teams Advanced',    title: 'Use Together Mode to reduce fatigue',                    desc: 'Together Mode places everyone in a shared virtual space — more natural than grid view for long meetings.',                                         example: 'Switch to Together Mode for a 2-hour all-hands meeting to make it feel less draining.' },
    { id: 'a38', num: '38', section: 'Teams Advanced',    title: 'Use Polls for quick decisions',                          desc: 'Polls help gather instant feedback and make group decisions without long back-and-forth discussions.',                                               example: 'Run a live poll during a meeting to vote on next week\'s meeting time.' },
    { id: 'a39', num: '39', section: 'Teams Advanced',    title: 'Use the Approvals app for lightweight workflows',        desc: 'Approvals lets you request and track sign-offs without needing a full Power Automate workflow.',                                                    example: 'Request budget change approval directly in Teams — no email chain, no lost follow-ups.' },
    { id: 'a40', num: '40', section: 'Teams Advanced',    title: 'Pin apps like Planner, OneNote, or SharePoint',         desc: 'Pinning apps to the Teams sidebar turns it into your all-in-one productivity hub.',                                                                example: 'Pin Planner to track project tasks without ever leaving Teams.' },
    { id: 'a41', num: '41', section: 'Outlook Advanced',  title: 'Use Quick Steps to automate multi-step actions',        desc: 'Quick Steps combine multiple actions into a single click — move, categorise, forward, and mark read simultaneously.',                            example: 'Create a Quick Step: Move to "Projects" → Apply category → Mark as read — all in one click.' },
    { id: 'a42', num: '42', section: 'Outlook Advanced',  title: 'Use Rules to auto-organise your inbox',                 desc: 'Rules sort emails automatically based on sender, subject, keywords, or recipients — set once, work forever.',                                      example: 'Automatically move all newsletters to a "Reading" folder so your inbox only shows direct messages.' },
    { id: 'a43', num: '43', section: 'Outlook Advanced',  title: 'Use Sweep to clean up recurring senders',              desc: 'Sweep removes or moves all emails from a specific sender — great for bulk clean-ups.',                                                            example: 'Delete all but the latest email from a vendor who sends daily updates you rarely read.' },
    { id: 'a44', num: '44', section: 'Outlook Advanced',  title: 'Use Delay Send to schedule messages',                   desc: 'Delay Send lets you write now and deliver at the perfect time — without being at your desk.',                                                      example: 'Write a client email at 11pm but schedule it to send at 9am so it lands at the top of their inbox.' },
    { id: 'a45', num: '45', section: 'Outlook Advanced',  title: 'Use My Templates for reusable responses',              desc: 'Templates save time on repetitive emails — access them in one click from the compose panel.',                                                    example: 'Create a template for weekly status updates and insert it with one click every Friday.' },
    { id: 'a46', num: '46', section: 'Outlook Advanced',  title: 'Use @mentions to highlight tasks in email',            desc: '@mentions flag messages for recipients — they see it called out in their inbox even in a long thread.',                                          example: 'Tag @Sarah in the body of an email to make it clear the action is specifically hers.' },
    { id: 'a47', num: '47', section: 'Outlook Advanced',  title: 'Use Ignore Conversation to mute noisy threads',        desc: 'Ignore stops irrelevant threads from cluttering your inbox — all future replies are auto-deleted.',                                              example: 'Mute a 40-reply-all chain about the office car park and never see it again.' },
    { id: 'a48', num: '48', section: 'Outlook Advanced',  title: 'Use Focused Inbox to reduce noise',                    desc: 'Focused Inbox uses AI to separate important emails from low-priority ones.',                                                                      example: 'Keep client and manager emails in Focused, newsletters and automated alerts in Other.' },
    { id: 'a49', num: '49', section: 'Outlook Advanced',  title: 'Use FindTime or Scheduling Assistant',                  desc: 'Eliminate back-and-forth scheduling by showing everyone\'s availability at a glance.',                                                            example: 'Send a FindTime poll to 8 people — they vote on their preferred slot and a meeting is booked automatically.' },
    { id: 'a50', num: '50', section: 'Outlook Advanced',  title: 'Use Search Folders for dynamic filtering',             desc: 'Search Folders act as virtual folders that auto-update based on rules — without moving any emails.',                                            example: 'Create a folder that always shows all unread emails from your manager, across every folder.' }
  ]
};
