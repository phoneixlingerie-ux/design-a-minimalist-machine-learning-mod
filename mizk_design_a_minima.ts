interface ModelConfig {
  name: string;
  type: 'classifier' | 'regressor';
  dataset: string;
  features: string[];
  target: string;
  validationSplit: number;
}

interface HyperparameterConfig {
  learningRate: number;
  batchSize: number;
  epochs: number;
  hiddenLayers: number[];
}

interface GeneratorConfig {
  models: ModelConfig[];
  hyperparameters: HyperparameterConfig;
  optimizationGoal: 'accuracy' | 'f1-score' | 'mean_squared_error';
  searchSpace: 'grid' | 'random';
  numTrials: number;
}

const config: GeneratorConfig = {
  models: [
    {
      name: 'Model 1',
      type: 'classifier',
      dataset: 'iris',
      features: ['sepal_length', 'sepal_width', 'petal_length', 'petal_width'],
      target: 'class',
      validationSplit: 0.2,
    },
    {
      name: 'Model 2',
      type: 'regressor',
      dataset: 'boston_housing',
      features: ['CRIM', 'ZN', 'INDUS', 'CHAS', 'NOX', 'RM', 'AGE', 'DIS', 'RAD', 'TAX', 'PTRATIO', 'B', 'LSTAT'],
      target: 'MEDV',
      validationSplit: 0.2,
    },
  ],
  hyperparameters: {
    learningRate: 0.01,
    batchSize: 32,
    epochs: 100,
    hiddenLayers: [64, 32],
  },
  optimizationGoal: 'accuracy',
  searchSpace: 'grid',
  numTrials: 10,
};

export default config;