import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { exerciseOption, youtubeOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetMuscleExersice, setTargetMuscleExersice] = useState([]);
  const [equipmentExersice, setEquipmentExersice] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideo(exerciseVideoData.contents);

      const targetMuscleExersiceData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOption
      );
      setTargetMuscleExersice(targetMuscleExersiceData);

      const equipmentExersiceData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOption
      );
      setEquipmentExersice(equipmentExersiceData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideo={exerciseVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        equipmentExersice={equipmentExersice}
        targetMuscleExersice={targetMuscleExersice}
      />
    </Box>
  );
};

export default ExerciseDetail;
