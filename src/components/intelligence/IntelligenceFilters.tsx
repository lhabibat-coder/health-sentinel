import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Button,
} from "@mui/material";

import { useIntelligence } from "../../context/IntelligenceContext";

export default function IntelligenceFilters() {
  const {
    severity,
    setSeverity,
    stateFilter,
    setStateFilter,
    topic,
    setTopic,
  } = useIntelligence();

  const clearFilters = () => {
    setSeverity("");
    setStateFilter("");
    setTopic("");
  };

  return (
    <Card sx={{ mb: 3, bgcolor: "#111827", border: "1px solid #334155", borderRadius: 3 }}>
      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          sx={{ flexWrap: "wrap", alignItems: "center" }}
        >
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Severity</InputLabel>

            <Select
              value={severity}
              label="Severity"
              onChange={(e) => setSeverity(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="HIGH">High</MenuItem>
              <MenuItem value="MEDIUM">Medium</MenuItem>
              <MenuItem value="LOW">Low</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>State</InputLabel>

            <Select
              value={stateFilter}
              label="State"
              onChange={(e) => setStateFilter(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Kano">Kano</MenuItem>
              <MenuItem value="Kaduna">Kaduna</MenuItem>
              <MenuItem value="Lagos">Lagos</MenuItem>
              <MenuItem value="Abuja">Abuja</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel>Topic</InputLabel>

            <Select
              value={topic}
              label="Topic"
              onChange={(e) => setTopic(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Cosmetics">Cosmetics</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Children">Children</MenuItem>
              <MenuItem value="Misinformation">Misinformation</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}