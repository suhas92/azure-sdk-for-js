## API Report File for "@azure/cognitiveservices-textanalytics"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ApiKeyCredentials } from '@azure/core-http';
import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/identity';

// @public
export interface AnalyzeSentimentErrorResult extends TextAnalyticsErrorResult {
}

// @public
export interface AnalyzeSentimentOptions extends TextAnalyticsOperationOptions {
}

// @public
export type AnalyzeSentimentResult = AnalyzeSentimentSuccessResult | AnalyzeSentimentErrorResult;

// @public
export interface AnalyzeSentimentResultCollection extends Array<AnalyzeSentimentResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface AnalyzeSentimentSuccessResult extends TextAnalyticsSuccessResult {
    documentScores: SentimentConfidenceScorePerLabel;
    sentences: SentenceSentiment[];
    sentiment: DocumentSentimentValue;
}

// @public
export class CognitiveServicesCredential extends ApiKeyCredentials {
    constructor(subscriptionKey: string);
}

// @public
export interface DetectedLanguage {
    iso6391Name: string;
    name: string;
    score: number;
}

// @public
export interface DetectLanguageErrorResult extends TextAnalyticsErrorResult {
}

// @public
export type DetectLanguageResult = DetectLanguageSuccessResult | DetectLanguageErrorResult;

// @public
export interface DetectLanguageResultCollection extends Array<DetectLanguageResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface DetectLanguagesOptions extends TextAnalyticsOperationOptions {
}

// @public
export interface DetectLanguageSuccessResult extends TextAnalyticsSuccessResult {
    readonly detectedLanguages: DetectedLanguage[];
    readonly primaryLanguage: DetectedLanguage;
}

// @public
export type DocumentSentimentValue = 'positive' | 'neutral' | 'negative' | 'mixed';

// @public
export interface Entity {
    length: number;
    offset: number;
    score: number;
    subtype?: string;
    text: string;
    type: string;
}

// @public
export type ErrorCodeValue = 'invalidRequest' | 'invalidArgument' | 'internalServerError' | 'serviceUnavailable';

// @public
export interface ExtractKeyPhrasesErrorResult extends TextAnalyticsErrorResult {
}

// @public
export interface ExtractKeyPhrasesOptions extends TextAnalyticsOperationOptions {
}

// @public
export type ExtractKeyPhrasesResult = ExtractKeyPhrasesSuccessResult | ExtractKeyPhrasesErrorResult;

// @public
export interface ExtractKeyPhrasesResultCollection extends Array<ExtractKeyPhrasesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface ExtractKeyPhrasesSuccessResult extends TextAnalyticsSuccessResult {
    keyPhrases: string[];
}

// @public
export interface InnerError {
    code: InnerErrorCodeValue;
    details?: {
        [propertyName: string]: string;
    };
    innerError?: InnerError;
    message: string;
    target?: string;
}

// @public
export type InnerErrorCodeValue = 'invalidParameterValue' | 'invalidRequestBodyFormat' | 'emptyRequest' | 'missingInputRecords' | 'invalidDocument' | 'modelVersionIncorrect' | 'invalidDocumentBatch' | 'unsupportedLanguageCode' | 'invalidCountryHint';

// @public
export interface LanguageInput {
    // (undocumented)
    countryHint?: string;
    id: string;
    // (undocumented)
    text: string;
}

// @public
export interface LinkedEntity {
    dataSource: string;
    id?: string;
    language: string;
    matches: Match[];
    name: string;
    url: string;
}

// @public
export interface Match {
    length: number;
    offset: number;
    score: number;
    text: string;
}

// @public
export interface MultiLanguageInput {
    id: string;
    language?: string;
    text: string;
}

// @public
export interface RecognizeEntitiesErrorResult extends TextAnalyticsErrorResult {
}

// @public
export interface RecognizeEntitiesOptions extends TextAnalyticsOperationOptions {
}

// @public
export type RecognizeEntitiesResult = RecognizeEntitiesSuccessResult | RecognizeEntitiesErrorResult;

// @public
export interface RecognizeEntitiesResultCollection extends Array<RecognizeEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: Entity[];
}

// @public
export interface RecognizeLinkedEntitiesErrorResult extends TextAnalyticsErrorResult {
}

// @public
export interface RecognizeLinkedEntitiesOptions extends TextAnalyticsOperationOptions {
}

// @public
export type RecognizeLinkedEntitiesResult = RecognizeLinkedEntitiesSuccessResult | RecognizeLinkedEntitiesErrorResult;

// @public
export interface RecognizeLinkedEntitiesResultCollection extends Array<RecognizeLinkedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeLinkedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: LinkedEntity[];
}

// @public
export interface RecognizePiiEntitiesOptions extends TextAnalyticsOperationOptions {
}

// @public
export interface SentenceSentiment {
    length: number;
    offset: number;
    sentenceScores: SentimentConfidenceScorePerLabel;
    sentiment: SentenceSentimentValue;
    warnings?: string[];
}

// @public
export type SentenceSentimentValue = 'positive' | 'neutral' | 'negative';

// @public
export interface SentimentConfidenceScorePerLabel {
    // (undocumented)
    negative: number;
    // (undocumented)
    neutral: number;
    // (undocumented)
    positive: number;
}

// @public
export class TextAnalyticsClient {
    constructor(endpointUrl: string, credential: TokenCredential | CognitiveServicesCredential, options?: TextAnalyticsClientOptions);
    analyzeSentiment(inputs: string[], language?: string, options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    analyzeSentiment(inputs: MultiLanguageInput[], options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    defaultCountryHint: string;
    defaultLanguage: string;
    detectLanguages(inputs: string[], countryHint?: string, options?: DetectLanguagesOptions): Promise<DetectLanguageResultCollection>;
    detectLanguages(inputs: LanguageInput[], options?: DetectLanguagesOptions): Promise<DetectLanguageResultCollection>;
    readonly endpointUrl: string;
    extractKeyPhrases(inputs: string[], language?: string, options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    extractKeyPhrases(inputs: MultiLanguageInput[], options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    recognizeEntities(inputs: string[], language?: string, options?: RecognizeEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizeEntities(inputs: MultiLanguageInput[], options?: RecognizeEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizeLinkedEntities(inputs: string[], language?: string, options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
    recognizeLinkedEntities(inputs: MultiLanguageInput[], options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
    recognizePiiEntities(inputs: string[], language?: string, options?: RecognizePiiEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
    recognizePiiEntities(inputs: MultiLanguageInput[], options?: RecognizePiiEntitiesOptions): Promise<RecognizeEntitiesResultCollection>;
}

// @public
export interface TextAnalyticsClientOptions extends PipelineOptions {
    defaultCountryHint?: string;
    defaultLanguage?: string;
}

// @public
export interface TextAnalyticsError {
    code: ErrorCodeValue;
    details?: TextAnalyticsError[];
    innerError?: InnerError;
    message: string;
    target?: string;
}

// @public
export interface TextAnalyticsErrorResult {
    readonly error: TextAnalyticsError;
    readonly id: string;
}

// @public
export interface TextAnalyticsOperationOptions extends OperationOptions {
    includeStatistics?: boolean;
    modelVersion?: string;
}

// @public
export type TextAnalyticsResult = TextAnalyticsSuccessResult | TextAnalyticsErrorResult;

// @public
export interface TextAnalyticsSuccessResult {
    readonly id: string;
    readonly statistics?: TextDocumentStatistics;
}

// @public
export interface TextDocumentBatchStatistics {
    documentCount: number;
    erroneousDocumentCount: number;
    transactionCount: number;
    validDocumentCount: number;
}

// @public
export interface TextDocumentStatistics {
    characterCount: number;
    transactionCount: number;
}


// (No @packageDocumentation comment for this package)

```
