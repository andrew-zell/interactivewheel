
## 📝 How It Works

The app loads your **SVG directly** and makes any group with an ID starting with `hotspot-` clickable!

### Making Products Clickable:

1. **In Figma**: Select icon + text, group them (Cmd/Ctrl + G)
2. **Name the group**: `hotspot-{key}` (e.g., `hotspot-meetings`, `hotspot-teamchat`)
3. **Export SVG**: Save as `product-wheel.svg`
4. **Replace**: Drop into `/public/product-wheel.svg`
5. **Done!** ✨ The groups are automatically clickable with hover effects

### Product Keys:

Match the keys in `src/data/content.ts`: `meetings`, `phone`, `teamchat`, `notes`, `clips`, `workvivo`, `tasks`, `docs`, `whiteboard`, `scheduler`, `mailcalendar`, `workspacereservation`, `visitormanagement`, `digitalsignage`, `rooms`, `events`, `sessions`, `webinars`, `revenueaccelerator`, `qualitymanagement`, `workforce`, `contactcenter`, `virtualagent`, `aistudio`, `workflows`, `apis`, `sdks`, `apps`, `marketplace`, `microsoft`, `google`, `salesforce`, `atlassian`, `servicenow`

## 🎨 Customization

- **Content**: Edit `src/data/content.ts` (titles, subtitles, bullet points)
- **Fonts**: Inter (body) & Montserrat (headers) via Google Fonts
- **Animations**: Hover opacity + scale + glow, ESC or × to close slides

## ✨ Special Effects

- **AI Companion** (`hotspot-aicompanion`): Toggle a continuous glowing cyan-to-mint "power boost" animation around the wheel. Click once to turn on, click again to turn off!
