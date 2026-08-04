import {

  Card,

  CardContent,

  Typography,

  Chip,

  Box,

} from "@mui/material";



import { useProgramme } from "../../context/ProgrammeContext";



export default function ProgrammeSelector() {

  const {

    programmes,

    selectedProgramme,

    selectProgramme,

  } = useProgramme();



  return (

    <Card

      sx={{

        mb: 3,

        borderRadius: 4,

      }}

    >

      <CardContent>

        <Typography

          variant="h5"

          fontWeight={700}

          align="center"

          gutterBottom

        >

          Health Programmes

        </Typography>



        <Typography

          variant="body1"

          color="text.secondary"

          align="center"

          sx={{ mb: 3 }}

        >

          Switch between national public health programmes.

        </Typography>



        {/* Scrollable Programme Bar */}



        <Box

          sx={{

            display: "flex",

            gap: 1.5,



            overflowX: "auto",



            pb: 1,



            scrollBehavior: "smooth",



            "&::-webkit-scrollbar": {

              height: 8,

            },



            "&::-webkit-scrollbar-thumb": {

              backgroundColor: "#334155",

              borderRadius: 20,

            },



            "&::-webkit-scrollbar-track": {

              backgroundColor: "transparent",

            },

          }}

        >

          {programmes.map((programme) => (

            <Chip

              key={programme.id}

              clickable

              label={programme.name}

              onClick={() => selectProgramme(programme.id)}

              color={

                selectedProgramme.id === programme.id

                  ? "primary"

                  : "default"

              }

              variant={

                selectedProgramme.id === programme.id

                  ? "filled"

                  : "outlined"

              }

              sx={{

                flexShrink: 0,

                px: 1,

                fontSize: 17,

                height: 48,

                borderRadius: 999,

              }}

            />

          ))}

        </Box>



        {/* Current Programme */}



        <Box

          sx={{

            mt: 4,

            textAlign: "center",

          }}

        >

          <Typography

            variant="subtitle1"

            fontWeight={600}

            color="text.secondary"

          >

            Current Programme

          </Typography>



          <Typography

            variant="h3"

            fontWeight={800}

            sx={{

              color: selectedProgramme.color,

              mt: 1,

            }}

          >

            {selectedProgramme.name}

          </Typography>



          <Typography

            variant="body1"

            color="text.secondary"

            sx={{

              mt: 2,

              maxWidth: 650,

              mx: "auto",

            }}

          >

            {selectedProgramme.description}

          </Typography>

        </Box>

      </CardContent>

    </Card>

  );

}