import { Paper, Stack, Typography } from "@mui/material";
import { ProfileCard } from "@portima/fe-lib";

export function CustomComponentsShowcase() {
  return (
    <Stack spacing={4}>
      {/* ProfileCard Showcase */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          ProfileCard - Composite Component
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          ProfileCard is a custom component from the library that combines
          multiple Material-UI components (Card, Avatar, Typography, Chip,
          Button, etc.) into a reusable profile card.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{ flexWrap: "wrap", gap: 3, mt: 3 }}
        >
          <ProfileCard
            name="Sarah Johnson"
            role="Senior Software Engineer"
            avatarUrl="https://i.pravatar.cc/150?img=47"
            email="sarah.johnson@example.com"
            phone="+1 (555) 123-4567"
            location="San Francisco, CA"
            bio="Passionate about building scalable web applications and mentoring junior developers."
            skills={["React", "TypeScript", "Node.js", "AWS"]}
            onViewProfile={() => alert("View Profile clicked!")}
            onMessage={() => alert("Message clicked!")}
            onEdit={() => alert("Edit clicked!")}
            onDelete={() => alert("Delete clicked!")}
          />

          <ProfileCard
            name="John Doe"
            role="Product Manager"
            email="john.doe@example.com"
            location="New York, NY"
            bio="Leading product strategy and roadmap for innovative solutions."
            skills={["Product Strategy", "Agile", "UX Design"]}
            onViewProfile={() => alert("View Profile clicked!")}
            onMessage={() => alert("Message clicked!")}
          />

          <ProfileCard
            name="Emma Wilson"
            role="UX/UI Designer"
            avatarUrl="https://i.pravatar.cc/150?img=32"
            email="emma.wilson@example.com"
            phone="+1 (555) 987-6543"
            location="Austin, TX"
            bio="Creating beautiful and intuitive user experiences."
            skills={["Figma", "Adobe XD", "User Research", "Prototyping"]}
            variant="outlined"
            onViewProfile={() => alert("View Profile clicked!")}
            onMessage={() => alert("Message clicked!")}
          />
        </Stack>
      </Paper>

      {/* ProfileCard Variants */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          ProfileCard Variants
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Different styles and configurations of the ProfileCard component.
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{ flexWrap: "wrap", gap: 3, mt: 3 }}
        >
          <ProfileCard
            name="Michael Chen"
            role="Data Scientist"
            showActions={false}
            showMoreOptions={false}
          />

          <ProfileCard
            name="David Kim"
            role="Full Stack Developer"
            email="david.kim@example.com"
            location="Seattle, WA"
            bio="Building end-to-end solutions with modern technologies."
            skills={[
              "React",
              "Vue.js",
              "Angular",
              "Node.js",
              "Python",
              "Django",
              "PostgreSQL",
              "MongoDB",
            ]}
            elevation={1}
            onViewProfile={() => alert("View Profile clicked!")}
            onMessage={() => alert("Message clicked!")}
          />

          <ProfileCard
            name="Rachel Green"
            role="Business Analyst"
            avatarUrl="https://i.pravatar.cc/150?img=45"
            email="rachel.green@example.com"
            phone="+1 (555) 246-8135"
            location="Chicago, IL"
            bio="Analyzing data to drive business decisions and growth."
            skills={["SQL", "Tableau", "Excel", "Business Intelligence"]}
            elevation={12}
            onViewProfile={() => alert("View Profile clicked!")}
            onMessage={() => alert("Message clicked!")}
          />
        </Stack>
      </Paper>
    </Stack>
  );
}
