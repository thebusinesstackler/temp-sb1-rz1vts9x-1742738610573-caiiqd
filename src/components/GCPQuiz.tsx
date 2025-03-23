import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, XCircle, ChevronRight, Award, RefreshCw, Download, Clock, AlertCircle, Info } from 'lucide-react';

interface GCPQuizProps {
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GCPQuiz: React.FC<GCPQuizProps> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);

  // Sample GCP quiz questions with explanations
  const questions: Question[] = [
    {
      id: 1,
      text: "What is the primary purpose of Good Clinical Practice (GCP)?",
      options: [
        "To increase the speed of clinical trials",
        "To protect the rights, safety, and well-being of trial subjects",
        "To reduce the cost of clinical research",
        "To simplify regulatory requirements"
      ],
      correctAnswer: 1,
      explanation: "Good Clinical Practice (GCP) is an international ethical and scientific quality standard for designing, conducting, recording, and reporting trials that involve human subjects. Its primary purpose is to protect the rights, safety, and well-being of trial subjects while ensuring credible trial data."
    },
    {
      id: 2,
      text: "Which document contains all the essential information for investigators to conduct a clinical trial?",
      options: [
        "Case Report Form (CRF)",
        "Informed Consent Form",
        "Protocol",
        "Investigator's Brochure"
      ],
      correctAnswer: 2,
      explanation: "The Protocol is the document that describes the objective(s), design, methodology, statistical considerations, and organization of a clinical trial. It contains all the essential information that investigators need to conduct the trial consistently across all sites."
    },
    {
      id: 3,
      text: "What is the definition of source data in clinical trials?",
      options: [
        "Data entered into the electronic data capture system",
        "Original records and certified copies of original records",
        "Data analyzed by the statistician",
        "Information in the final study report"
      ],
      correctAnswer: 1,
      explanation: "Source data refers to all information in original records and certified copies of original records of clinical findings, observations, or other activities in a clinical trial necessary for the reconstruction and evaluation of the trial."
    },
    {
      id: 4,
      text: "Who is ultimately responsible for the conduct of a clinical trial at a site?",
      options: [
        "Study Coordinator",
        "Principal Investigator",
        "Sponsor",
        "IRB/Ethics Committee"
      ],
      correctAnswer: 1,
      explanation: "The Principal Investigator (PI) is ultimately responsible for the conduct of a clinical trial at their site. This includes ensuring protocol compliance, proper data collection, subject safety, and adherence to regulatory requirements."
    },
    {
      id: 5,
      text: "What is required before a subject can participate in a clinical trial?",
      options: [
        "Verbal consent",
        "Payment of participation fee",
        "Written informed consent",
        "Medical insurance"
      ],
      correctAnswer: 2,
      explanation: "Written informed consent is a mandatory requirement before any subject can participate in a clinical trial. This ensures that participants understand the trial's purpose, procedures, risks, benefits, and their rights before agreeing to participate."
    },
    {
      id: 6,
      text: "What should be done if a serious adverse event occurs during a clinical trial?",
      options: [
        "Wait until the next scheduled report",
        "Immediate reporting to sponsor and IRB/EC",
        "Only document in patient records",
        "Discuss at next team meeting"
      ],
      correctAnswer: 1,
      explanation: "Serious adverse events must be reported immediately to the sponsor and IRB/Ethics Committee. This ensures proper oversight and allows for timely assessment of patient safety and potential protocol modifications if needed."
    },
    {
      id: 7,
      text: "How long must clinical trial records be retained after study completion?",
      options: [
        "1 year",
        "5 years",
        "15 years",
        "At least 2 years after last approval of marketing application"
      ],
      correctAnswer: 3,
      explanation: "According to ICH GCP, essential documents should be retained until at least 2 years after the last approval of a marketing application. Some jurisdictions may require longer retention periods."
    }
  ];

  // Timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeRemaining > 0 && !quizCompleted) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setQuizCompleted(true);
            setTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeRemaining, quizCompleted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) correct++;
    });
    return (correct / questions.length) * 100;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      setTimerActive(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setShowExplanation(false);
    setTimeRemaining(1800);
    setTimerActive(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <Award className="h-6 w-6 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold">GCP Quiz</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span className={`font-semibold ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-700'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {!quizCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round((currentQuestion + 1) / questions.length * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-purple-600 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].text}</h3>
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-4 rounded-lg border ${
                        selectedAnswers[currentQuestion] === index
                          ? selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      disabled={showExplanation}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                          selectedAnswers[currentQuestion] === index
                            ? selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer
                              ? 'border-green-500'
                              : 'border-red-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAnswers[currentQuestion] === index && (
                            selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer
                              ? <CheckCircle className="h-4 w-4 text-green-500" />
                              : <XCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        {option}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <motion.div 
                    className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
                        <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <motion.button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-2 rounded-md font-semibold ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  whileHover={currentQuestion !== 0 ? { scale: 1.05 } : {}}
                  whileTap={currentQuestion !== 0 ? { scale: 0.95 } : {}}
                >
                  Previous
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className={`px-6 py-2 rounded-md font-semibold flex items-center ${
                    selectedAnswers[currentQuestion] === undefined
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-purple-700 text-white hover:bg-purple-800'
                  }`}
                  whileHover={selectedAnswers[currentQuestion] !== undefined ? { scale: 1.05 } : {}}
                  whileTap={selectedAnswers[currentQuestion] !== undefined ? { scale: 0.95 } : {}}
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </div>
          ) : (
            <div>
              {/* Results */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center bg-purple-100 rounded-full p-4 mb-4">
                  <Award className="h-12 w-12 text-purple-700" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                <p className="text-gray-600 mb-4">You scored {Math.round(calculateScore())}%</p>
                <p className="text-gray-500 mb-4">
                  Time taken: {formatTime(1800 - timeRemaining)}
                </p>
                
                {calculateScore() >= 80 ? (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
                    <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                    <p className="font-semibold">Congratulations! You've passed the GCP quiz.</p>
                    <p className="text-sm">You can now download your certificate.</p>
                  </div>
                ) : (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
                    <AlertCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                    <p className="font-semibold">You need a score of 80% or higher to pass.</p>
                    <p className="text-sm">Review the material and try again.</p>
                  </div>
                )}
              </div>

              {/* Answer Review */}
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Review Your Answers:</h4>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1">
                          {selectedAnswers[index] === question.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium mb-2">{question.text}</p>
                          <p className="text-sm text-gray-600">
                            Your answer: {question.options[selectedAnswers[index]]}
                          </p>
                          {selectedAnswers[index] !== question.correctAnswer && (
                            <p className="text-sm text-green-600 mt-1">
                              Correct answer: {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <div className="mt-2 p-3 bg-blue-50 rounded text-sm text-blue-800">
                            <strong>Explanation:</strong> {question.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <motion.button
                  onClick={resetQuiz}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Quiz
                </motion.button>
                {calculateScore() >= 80 && (
                  <motion.button
                    className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </motion.button>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default GCPQuiz;